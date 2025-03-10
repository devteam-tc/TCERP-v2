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
import KeywordParser from "./keywordParser";
import { FaEnvelope, FaGlobe } from "react-icons/fa"; // Import React Icons
import AnimatedColumn from "../../components/Home/AnimatedColumn";
import TableOfContents from "./TableOfContents";

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
    title: post.title || "Tech Cloud ERP Blog",
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
    .filter((post) => post.id !== currentSlug && post.tags?.some((tag) => tags.includes(tag)))
    .sort((a, b) => (b.date?.seconds || 0) - (a.date?.seconds || 0))
    .slice(0, 3);
  return allPosts;
}

export default async function BlogPost({ params }) {
  const post = await getBlogPost(params.slug);
  if (!post) notFound();

  const relevantPosts = await getRelevantPosts(post.tags, params.slug);
  const faqs = await getDynamicData("faqs");

  return (
    <main className={styles.main}>
      <Navigation />
      <section className={styles.sectionbeg}>
        <div className="container">
          <AnimatedColumn direction="left">
            <div>
            <h2 className={styles.heading}>{post.title}</h2>
        <div className={styles.divider}></div>
            </div>
          </AnimatedColumn>
        </div>
      </section>
      <div className={styles.bodySection}>

      <div className="container">
          <div className="row">
            <div className="col-md-8">
      <article className={styles.article}>
        <div className={styles.container}>
          {/* Tags */}
          {post.tagsSection && (
            <div className={styles.meta}>
              <div className={styles.tags}>
                {post.tagsSection.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          )}
 
          {/* Blog Content */}
          <div className="blog-content">
          <div className={styles.imageContainer}>
              <img src={post.image || "/placeholder.svg"} alt={post.title}  className={styles.responsiveImage} />
              </div>
              {post.contentSection?.map((section, index) => {
                  const anchorWordsObject = post.anchorWordsSection?.reduce((acc, item) => {
                    return {
                      ...acc,
                      ...Object.fromEntries(
                        Object.entries(item).map(([key, value]) => [key.toLowerCase().trim(), value])
                      ),
                    };
                  }, {});

                  return (
                    <div key={index}>
                      <h4 className={styles.topheading}>{section.title}</h4>

                      {/* Now handling description as an array */}
                      {section.description?.map((desc, descIndex) => (
                        <p key={descIndex}>
                          <KeywordParser description={desc} anchorWordsSection={anchorWordsObject} />
                        </p>
                      ))}
                    </div>
                  );
                })}


</div>  
      </div>
      </article>
      {/* Key Takeaways Section */}
      <div className="blog-content"> 
      <section className={styles.section}>
      <div className={styles.container}>
        {post?.pointsWiseText &&
        Object.keys(post.pointsWiseText).length > 0 ? (
          Object.keys(post.pointsWiseText).map((sectionKey) => {
            const sectionArray = post.pointsWiseText[sectionKey];

            if (!Array.isArray(sectionArray) || sectionArray.length === 0)
              return null;

            return (
              <div key={sectionKey}>
                {/* Render TopHeading & TopIntro for the first item */}
                {sectionArray[0]?.TopHeading && sectionArray[0]?.TopIntro && (
                  <>
                    <h4 className={styles.sectionTitle}>
                      {sectionArray[0].TopHeading}
                    </h4>
                    <p className={styles.description}>
                      {sectionArray[0].TopIntro}
                    </p>
                  </>
                )}

                {/* Render Remaining Points (if any) */}
                {sectionArray.length > 1 &&
                  sectionArray.slice(1).map((item, index) => (
                    <div key={index}>
                      <h5 className={styles.subHeading}>{item.title}</h5>
                      <p className={styles.description}>{item.description}</p>
                    </div>
                  ))}
              </div>
            );
          })
        ) : (
          <p className={styles.description}>No content available</p>
        )}
      </div>
    </section>
      </div>


      {/* Call to Action Section */}
      {post.ctaSection && (
        <div className={styles.ctaContainer}>
          <h2>{post.ctaSection.ctaTitle}</h2>
          {Array.isArray(post.ctaSection.data) && post.ctaSection.data.length > 0 ? (
            post.ctaSection.data.map((item, index) => (
              <div key={index}>
                <p>{item.description}</p>
              </div>
            ))
          ) : (
            <p>{post.ctaSection.description}</p>
          )}
        </div>
      )}

     {/* Frequently Asked Questions Container */}
    <section className={styles.faqSection}>
    <div className={styles.container}>
    <h2>{post?.faqSection?.faqTitle || "Frequently Asked Questions"}</h2>
    {console.log("FAQ Data: ", post?.faqSection?.faqs)} 
    <div className={styles.faqContainer}>
      {Array.isArray(post?.faqSection?.faqs) && post.faqSection.faqs.length > 0 ? (
        post.faqSection.faqs.map((faq, index) => (
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
<SocialShare title={post.title} />
          </div>

          {/* Sidebar with Table of Contents */}
    <div className="col-md-4">
      <TableOfContents />
    </div>

          </div>

          </div>

          </div>

                <Footer />
              </main>
  );
}
