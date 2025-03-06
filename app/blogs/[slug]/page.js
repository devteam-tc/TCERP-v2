import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "../../components/Header/navigation";
import Footer from "../../components/Footer";
import PageStyles from "../page.module.css";
import SocialShare from "./SocialShare";
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
  const faqs = await getDynamicData("faqs");
  
  // Fetching Key Takeaways from Firestore
  const keyTakeaways = post.keyTakeaways || [];

  return (
    <main className={styles.main}>
      <Navigation />
      {/* Top Section Container */}
      <section className={PageStyles.hero}>
        <div className={PageStyles.container}>
          <h1>{post.title}</h1>
        </div>
      </section>

      {/* Article Tags and Date Container */}
      <article className={styles.article}>
        <div className={styles.container}>
          <div className={styles.meta}>
            <div className={styles.tags}>
              {post.tagsSection.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <time className={styles.date}>
              {post.date ? new Date(post.date.seconds * 1000).toLocaleDateString() : "Unknown Date"}
            </time>
          </div>

      {/* Question and Answer Type Data after the image  */}
      <div>
        {post.contentSection.map((section, index) => (
          <div key={index}>
            <h4 style={{color: "#ef5226", fontSize: "1.5rem"}}>{section.title}</h4>
            {/* {section.text.map((paragraph, pIndex) => (
              <p key={pIndex} style={{ textAlign: "justify", fontSize: "1rem !important" }}>
                <KeywordParser text={paragraph} keywordLinks={post.keywordLinks} />
              </p>
            ))} */}

            <p  className="paragraph">
              <KeywordParser description={section.description} keywordLinks={post.keywordLinks} />
            </p>

          </div>
        ))}
      </div>
        <div className={styles.imageContainer}>
        <img src={post.image || "/placeholder.svg"} alt={post.title}  className={styles.responsiveImage} />
        </div>
      </div>






          {/* cta section */}
          <div className={styles.ctaContainer}>
            
            {Array.isArray(post.ctaSection.data) && post.ctaSection.data.length > 0 ? (
              post.ctaSection.data.map((item, index) => (
                <>
                <h2>{ctaSection.ctaTitle}</h2>
                <div key={index}>
                  <p>{item.description}</p>
                </div>
                </>
              ))
            ) : (
              <div>
                <p>hi</p>
              </div>
            )}
          </div>

{/* <div className={styles.buttonsContainer}>
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
  </div> */}



 {/* Frequently Asked Questions Container */}
<section className={styles.faqSection}>
  <div className={styles.container}>
    <h2>{faqTitle}</h2>
    {console.log("FAQ Data: ", faqs)}
    <div className={styles.faqContainer}>
      {faqs && faqs.length > 0 ? (
        faqs.map((faq, index) => (
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