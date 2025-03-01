import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "../../components/Header/navigation";
import Footer from "../../components/Footer";
import PageStyles from "../page.module.css";
import SocialShare from "./socialShare";
import KeywordParser from "./keywordParser"
import { FaEnvelope, FaGlobe } from "react-icons/fa"; // Import React Icons

async function getBlogPost(slug) {
  const docRef = doc(db, "blogPosts", slug);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    return null;
  }
  return { id: docSnap.id, ...docSnap.data() };
}

async function getDynamicData(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map((doc) => doc.data());
}

export async function generateStaticParams() {
  try {
    const blogCollection = collection(db, "blogPosts");
    const querySnapshot = await getDocs(blogCollection);
    return querySnapshot.docs.map((doc) => ({ slug: doc.id }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slug);
  if (!post) {
    return {
      title: "Blog Not Found - Tech Cloud ERP",
      description: "The blog post you are looking for does not exist.",
      keywords: "Tech Cloud ERP, blog, ERP solutions",
    };
  }
  return {
    title: post.meta?.title || "Tech Cloud ERP Blog",
    description: post.meta?.description || "Read the latest articles from Tech Cloud ERP.",
    keywords: post.meta?.keywords?.join(", ") || "ERP, software, business solutions",
    openGraph: {
      title: post.meta?.title || "Tech Cloud ERP Blog",
      description: post.meta?.description || "Read the latest articles from Tech Cloud ERP.",
      images: [
        {
          url: post.image || "/placeholder.svg",
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
  };
}

async function getRelevantPosts(tags, currentSlug) {
  if (!tags || tags.length === 0) return [];
  const blogCollection = collection(db, "blogPosts");
  const querySnapshot = await getDocs(blogCollection);
  const allPosts = querySnapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .filter((post) => post.id !== currentSlug && post.tags.some((tag) => tags.includes(tag)))
    .sort((a, b) => b.date.seconds - a.date.seconds)
    .slice(0, 3);
  return allPosts;
}

export default async function BlogPost({ params }) {
  const post = await getBlogPost(params.slug);
  if (!post) notFound();

  const relevantPosts = await getRelevantPosts(post.tags, params.slug);
  const crmFeatures = await getDynamicData("crmFeatures");
  const crmFactors = await getDynamicData("crmFactors");
  const faqs = await getDynamicData("faqs");
  
  // Fetching Key Takeaways from Firestore
  const keyTakeaways = post.keyTakeaways || [];

  return (
    <main className={styles.main}>
      <Navigation />
      <section className={PageStyles.hero}>
        <div className={PageStyles.container}>
          <h1>{post.title}</h1>
        </div>
      </section>

      <article className={styles.article}>
        <div className={styles.container}>
          <div className={styles.meta}>
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <time className={styles.date}>
              {post.date ? new Date(post.date.seconds * 1000).toLocaleDateString() : "Unknown Date"}
            </time>
          </div>
          
          {/* <div className={styles.content}>
            {post.content.map((section, index) => (
              <div key={index}>
                <h5>{section.heading}</h5>
                  {section.text.map((paragraph, index) => (
                    <p key={index} style={{ marginTop: "1vh", marginBottom: "1vh", textAlign: "justify" }}>
                      {paragraph}
                      <br />
                    </p>
                  ))}

              </div>
            ))}
          </div> */}

<div>
        {post.content.map((section, index) => (
          <div key={index}>
            <h5>{section.heading}</h5>
            {section.text.map((paragraph, pIndex) => (
              <p key={pIndex} style={{ textAlign: "justify" }}>
                <KeywordParser text={paragraph} keywordLinks={post.keywordLinks} />
              </p>
            ))}
          </div>
        ))}
      </div>




          <div className={styles.imageContainer}>
            <img src={post.image || "/placeholder.svg"} alt={post.title}  className={styles.responsiveImage} />
          </div>
        </div>

{/* Features Section */}
<section className={styles.featuresSection}>
  <div className={styles.container}>
    <h4 className={styles.sectionTitle}>{post.titleOne}</h4>
    <div className={styles.featureGrid}>
      {post.features.map((feature, index) => (
        <div key={index} className={styles.featureCard}>
          <h5 className={styles.featureTitle}>
            {index + 1}. {feature.title}
          </h5>
          <p className={styles.featureDescription}>{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Key Takeaways Section */}
        {/* {keyTakeaways.length > 0 && (
          <section className={styles.keyPoints}>
            <div className={styles.container}>
              <h2>{post.titleTwo}</h2>
              <ul className={styles.bulletList}>
                {keyTakeaways.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </section>
        )} */}

        {/* Choosing the Best CRM Software Section */}
        <section className={styles.factorsSection}>
          <div className={styles.container}>
            <h3>{post.titleThree}</h3>
            <div className={styles.factorGrid}>
              {post.choosingBest.map((factor, index) => (
                <div key={index} className={styles.factorCard}>
                  <h5>{factor.title}</h5>
                  <p>{factor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}




       


        <div className={styles.ctaContainer}>
  <h2>{post.ctaTitle}</h2>

  {post.cta && post.cta.length > 0 ? (
    post.cta.map((cta, index) => (
      <div key={index}>
        <p>{cta.description}</p>
        <p className={styles.contactInfo}>
          <strong>{cta.para}</strong>
        </p>
      </div>
    ))
  ) : (
    <p>No CTA data available</p>
  )}

  <div className={styles.buttonsContainer}>
    {/* ✅ Ensure indices exist before accessing */}
    {post.cta && post.cta.length > 2 && (
      <a href="mailto:info@techclouderp.com" className={styles.button}>
        <FaEnvelope /> {post.cta[2].emailtxt}
      </a>
    )}

    {post.cta && post.cta.length > 3 && (
      <Link href="https://techclouderp.com/" className={styles.button} target="_blank">
        <FaGlobe /> {post.cta[3].contacttxt}
      </Link>
    )}
  </div>
</div>


        {/* FAQ Section */}
      <section className={styles.faqSection}>
  <div className={styles.container}>
    <h2>Frequently Asked Questions</h2>
    {console.log("FAQ Data: ",  faqs)}
    <div className={styles.faqContainer}>
      {post.faqs && post.faqs.length > 0 ? (
        post.faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))
      ) : (
        <p>No FAQs available</p>
      )}
    </div>
  </div>
      </section>
   

      <SocialShare title={post.title} />

        {/* Related Posts Section */}
        {relevantPosts.length > 0 && (
          <section className={styles.relatedPosts}>
            <h2>Related Posts</h2>
            <div className={styles.relatedContainer}>
              {relevantPosts.map((related) => (
                <div key={related.id} className={styles.relatedPost}>
                  <Link href={`/blogs/${related.slug}`} className={styles.relatedLink}>
                    <Image src={related.image || "/placeholder.svg"} alt={related.title} width={300} height={200} className={styles.relatedImage} />
                    <h3>{related.title}</h3>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </article>
      <Footer />
    </main>
  );
}