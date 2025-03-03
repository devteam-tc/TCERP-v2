import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "../../components/Header/navigation";
import Footer from "../../components/footer";
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
            <h4 style={{color: "#ef5226", fontSize: "1.5rem"}}>{section.heading}</h4>
            {section.text.map((paragraph, pIndex) => (
              <p key={pIndex} style={{ textAlign: "justify", fontSize: "1rem !important" }}>
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
{/* <section>
  <div className={styles.container}>
  <h4 style={{color: "#ef5226", fontSize: "1.5rem"}}>{post.titleOne}</h4>
  <p style={{ fontSize: "1rem !important", textAlign: "justify"}}>{post.titleOneIntro}</p>
    {Array.isArray(post.features) && post.features.length > 0 ? (
      <ul style={{ listStyleType: "circle", paddingLeft: "20px", }}>
        {post.features.map((item, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            <h5 style={{ fontSize: "1.3rem" }}>{item?.title}</h5>
            <p style={{ fontSize: "1rem !important", margin: "4px 0 0" }}>{item?.description}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No key takeaways available.</p>
    )}
  </div>
</section> */}

<section>
  <div className={styles.container}>
    {post.pointsWiseText &&
      post.pointsWiseText.map((sectionData, sectionIndex) => (
        <div key={sectionIndex}>
          {Object.keys(sectionData).map((sectionKey, keyIndex) => (
            <div key={keyIndex}>
              {/* Display Section Top Heading & Top Intro (for firstSectionData, secondSectionsData, etc.) */}
              {sectionData[sectionKey]?.[0]?.TopHeading && sectionData[sectionKey]?.[0]?.TopIntro && (
                <>
                  <h4 style={{ color: "#ef5226", fontSize: "1.5rem" }}>
                    {sectionData[sectionKey][0].TopHeading}
                  </h4>
                  <p style={{ fontSize: "1rem !important", textAlign: "justify" }}>
                    {sectionData[sectionKey][0].TopIntro}
                  </p>
                </>
              )}

              {/* Render Additional Points inside Each Section (excluding first item if it's Title & TitleIntro) */}
              {Array.isArray(sectionData[sectionKey]) &&
              sectionData[sectionKey].length > 1 ? (
                sectionData[sectionKey]
                  .slice(1)
                  .map((section, index) => (
                    <div key={index}>
                      <h5 style={{ fontSize: "1.3rem", color: "#333" }}>{section.title}</h5>
                      <p style={{ fontSize: "1rem", textAlign: "justify" }}>{section.description}</p>
                    </div>
                  ))
              ) : (
                <p>No additional data available for {sectionKey}.</p>
              )}
            </div>
          ))}
        </div>
      ))}
  </div>
</section>

        {/* Key Takeaways Section */}
        {keyTakeaways.length > 0 && (
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
        )}

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