// "use client"
// import { useEffect, useState } from "react";
// import { db } from "../firebaseConfig"; // Ensure the correct Firebase import
// import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import { Button, Table } from "react-bootstrap";
// import Navigation from "../components/Header/navigation";

// const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       const querySnapshot = await getDocs(collection(db, "blogs"));
//       const blogsData = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setBlogs(blogsData);
//     };
//     fetchBlogs();
//   }, []);

//   const handleDelete = async (id) => {
//     if (confirm("Are you sure you want to delete this blog?")) {
//       await deleteDoc(doc(db, "blogs", id));
//       setBlogs(blogs.filter(blog => blog.id !== id));
//     }
//   };

//   return (
//     <>
//     <Navigation/>
//     <div className="container">
      
//       <h2>Manage Blogs</h2>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {blogs.map((blog) => (
//             <tr key={blog.id}>
//               <td>{blog.title}</td>
//               <td>
//                 <Button variant="warning" onClick={() => router.push(`/editBlog/${blog.id}`)}>Edit</Button>{' '}
//                 <Button variant="danger" onClick={() => handleDelete(blog.id)}>Delete</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//     </>
//   );
// };

// export default BlogList;


// "use client";
// import { useEffect, useState } from "react";
// import { db } from "../firebaseConfig";
// import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import { Button, Table, Container, Row, Col } from "react-bootstrap";

// import LogoutButton from "../utils/LogoutButton";

// const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       const querySnapshot = await getDocs(collection(db, "blogs"));
//       const blogsData = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setBlogs(blogsData);
//     };
//     fetchBlogs();
//   }, []);

//   const handleDelete = async (id) => {
//     if (confirm("Are you sure you want to delete this blog?")) {
//       await deleteDoc(doc(db, "blogs", id));
//       setBlogs(blogs.filter((blog) => blog.id !== id));
//     }
//   };

//   return (
//     <div>
//       <Container className="mt-4 container">
//         {/* Header Section - Responsive */}
//         <Row className="align-items-center mb-3">
//           <Col xs={12} md={6}>
//             <h2 className="fw-bold text-center text-md-start">Manage Blogs</h2>
//           </Col>
//           <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end gap-2">
//             <Button variant="success" onClick={() => router.push("/createBlog")}>
//               + New Blog
//             </Button>
//             <LogoutButton />
//           </Col>
//         </Row>

//         {/* Responsive Table */}
//         <div className="table-responsive">
//           <Table striped bordered hover className="shadow-sm">
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Category</th>
//                 <th>Created Date</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {blogs.map((blog) => (
//                 <tr key={blog.id}>
//                   <td>{blog.title}</td>
//                   <td>{blog.categories ? blog.categories.join(", ") : "No Categories"}</td>
//                   <td>{blog.date ? new Date(blog.date.toDate()).toLocaleDateString() : "N/A"}</td>
//                   <td>
//                     <div className="d-flex flex-wrap gap-2">
//                       <Button variant="warning" size="sm" onClick={() => router.push(`/editBlog/${blog.id}`)}>
//                         Edit
//                       </Button>
//                       <Button variant="danger" size="sm" onClick={() => handleDelete(blog.id)}>
//                         Delete
//                       </Button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default BlogList;



// "use client";
// import { useEffect, useState } from "react";
// import { db } from "../firebaseConfig";
// import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import { Button, Table } from "react-bootstrap";
// import Navigation from "../components/Header/navigation";
// import LogoutButton from "../utils/LogoutButton";
// import AddSectionsForm from "./createBlog/form"; // Import AddSectionsForm directly

// const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [showAddForm, setShowAddForm] = useState(false); // Toggle AddSectionsForm
//   const router = useRouter();

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       const querySnapshot = await getDocs(collection(db, "blogs"));
//       const blogsData = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setBlogs(blogsData);
//     };
//     fetchBlogs();
//   }, []);

//   const handleDelete = async (id) => {
//     if (confirm("Are you sure you want to delete this blog?")) {
//       await deleteDoc(doc(db, "blogs", id));
//       setBlogs(blogs.filter((blog) => blog.id !== id));
//     }
//   };

//   return (
//     <>
//       <div className="container">
//         {/* Header Section */}
//         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap" }}>
//           <h2 style={{ marginBottom: "10px" }}>Manage Blogs</h2>
//           <div>
//             <Button variant="success" onClick={() => setShowAddForm(!showAddForm)}>
//               {showAddForm ? "Close New Blog" : "+ Create New Blog"}
//             </Button>{' '}
//             <LogoutButton />
//           </div>
//         </div>

//         {/* Render AddSectionsForm directly if button is clicked */}
//         {showAddForm && (
//           <div className="add-form-container">
//             <AddSectionsForm />
//           </div>
//         )}

//         {/* Responsive Blog Table */}
//         <div className="table-responsive">
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Category</th>
//                 <th>Created Date</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {blogs.map((blog) => (
//                 <tr key={blog.id}>
//                   <td>{blog.title}</td>
//                   <td>{blog.categories ? blog.categories.join(", ") : "No Categories"}</td>
//                   <td>{blog.date ? new Date(blog.date.toDate()).toLocaleDateString() : "N/A"}</td>
//                   <td>
//                     <Button variant="warning" onClick={() => router.push(`/editBlog/${blog.id}`)}>Edit</Button>{' '}
//                     <Button variant="danger" onClick={() => handleDelete(blog.id)}>Delete</Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>
//       </div>

//       {/* Styles for responsiveness */}
//       <style jsx>{`
//         .add-form-container {
//           margin-top: 20px;
//           padding: 15px;
//           background: #f8f9fa;
//           border-radius: 8px;
//           box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//         }

//         @media (max-width: 768px) {
//           .container {
//             padding: 10px;
//           }
//           .table-responsive {
//             overflow-x: auto;
//           }
//           h2 {
//             font-size: 1.5rem;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default BlogList;
"use client";
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { Button, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice"; // Import logout action
import Navigation from "../components/Header/navigation";
import LogoutButton from "../utils/LogoutButton";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
  // Force authentication check on component mount
  useEffect(() => {
    const storedAuth = sessionStorage.getItem("isAuthenticated");
    if (!storedAuth || storedAuth !== "true") {
      router.replace("/login"); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const blogsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogsData);
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      await deleteDoc(doc(db, "blogs", id));
      setBlogs(blogs.filter((blog) => blog.id !== id));
    }
  };

  const handleLogout = () => {
    dispatch(logout()); // Update Redux state
    sessionStorage.removeItem("isAuthenticated"); // Remove authentication flag
    router.replace("/login"); // Redirect to login
  };

  return (
    <>
      <div className="container">
        {/* Header Section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap" }}>
          <h2 style={{ marginBottom: "10px" }}>Manage Blogs</h2>
          <div>
            <Button variant="success" onClick={() => router.push("/createBlog")}>
              + Create New Blog
            </Button>{" "}
            <Button variant="danger" onClick={handleLogout}>Logout</Button>
          </div>
        </div>

        {/* Responsive Blog Table */}
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Created Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td>{blog.title}</td>
                  <td>{blog.categories ? blog.categories.join(", ") : "No Categories"}</td>
                  <td>{blog.date ? new Date(blog.date.toDate()).toLocaleDateString() : "N/A"}</td>
                  <td>
                    {isAuthenticated && (
                      <Button variant="warning" onClick={() => router.push(`/editBlog/${blog.id}`)}>
                        Edit
                      </Button>
                    )}{" "}
                    <Button variant="danger" onClick={() => handleDelete(blog.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      {/* Styles for responsiveness */}
      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            padding: 10px;
          }
          .table-responsive {
            overflow-x: auto;
          }
          h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default BlogList;




// "use client"

// import { useEffect, useState } from "react"
// import { db } from "../firebaseConfig"
// import { collection, getDocs, deleteDoc, doc, query, orderBy, Timestamp } from "firebase/firestore"
// import { useRouter } from "next/navigation"
// import Navigation from "../components/Header/navigation"
// import { Button } from "react-bootstrap"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "../components/ui/pagination"
// import { ArrowUpDown, LogOut } from "lucide-react"

// const BlogList = () => {
//   const [blogs, setBlogs] = useState([])
//   const [filteredBlogs, setFilteredBlogs] = useState([])
//   const [categories, setCategories] = useState([])
//   const [selectedCategory, setSelectedCategory] = useState("")
//   const [sortDirection, setSortDirection] = useState("desc")
//   const [currentPage, setCurrentPage] = useState(1)
//   const blogsPerPage = 10

//   const router = useRouter()

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       const q = query(collection(db, "blogs"), orderBy("date", "desc"))
//       const querySnapshot = await getDocs(q)
//       const blogsData = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }))

//       setBlogs(blogsData)
//       setFilteredBlogs(blogsData)

//       // Extract unique categories
//       const allCategories = blogsData.flatMap((blog) => blog.categories || [])
//       const uniqueCategories = [...new Set(allCategories)]
//       setCategories(uniqueCategories)
//     }

//     fetchBlogs()
//   }, [])

//   useEffect(() => {
//     // Filter blogs based on selected category
//     let result = [...blogs]

//     if (selectedCategory) {
//       result = result.filter((blog) => blog.categories && blog.categories.includes(selectedCategory))
//     }

//     // Sort blogs
//     result.sort((a, b) => {
//       const dateA = a.date ? new Date(a.date.toDate()) : new Date(0)
//       const dateB = b.date ? new Date(b.date.toDate()) : new Date(0)

//       return sortDirection === "asc" ? dateA - dateB : dateB - dateA
//     })

//     setFilteredBlogs(result)
//     setCurrentPage(1) // Reset to first page when filtering
//   }, [blogs, selectedCategory, sortDirection])

//   const handleDelete = async (id) => {
//     if (confirm("Are you sure you want to delete this blog?")) {
//       await deleteDoc(doc(db, "blogs", id))
//       setBlogs(blogs.filter((blog) => blog.id !== id))
//     }
//   }

//   const toggleSortDirection = () => {
//     setSortDirection(sortDirection === "asc" ? "desc" : "asc")
//   }

//   // Pagination logic
//   const indexOfLastBlog = currentPage * blogsPerPage
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
//   const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog)
//   const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage)

//   const formatDate = (timestamp) => {
//     if (!timestamp) return "N/A"
//     try {
//       const date = timestamp instanceof Timestamp ? timestamp.toDate() : new Date(timestamp)
//       return date
//         .toLocaleDateString("en-GB", {
//           day: "2-digit",
//           month: "2-digit",
//           year: "numeric",
//         })
//         .replace(/\//g, "/")
//     } catch (error) {
//       console.error("Date formatting error:", error)
//       return "Invalid date"
//     }
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <Navigation />
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//           <h1 className="text-3xl font-bold">Blog List</h1>

//           <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 w-full md:w-auto">
//             <Button
//               variant="outline"
//               className="flex items-center gap-2 h-10 px-4 border border-gray-300 rounded"
//               onClick={toggleSortDirection}
//             >
//               Sorting
//               <ArrowUpDown className="h-4 w-4" />
//             </Button>

//             <Select value={selectedCategory} onValueChange={setSelectedCategory}>
//               <SelectTrigger className="w-full md:w-[200px] h-10">
//                 <SelectValue placeholder="Select Categories" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All Categories</SelectItem>
//                 {categories.map((category) => (
//                   <SelectItem key={category} value={category}>
//                     {category}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>

//             <div className="flex gap-2 ml-auto">
//               <Button className="bg-orange-500 hover:bg-orange-600 text-white" onClick={() => router.push("/addBlog")}>
//                 Add new
//               </Button>

//               <Button className="bg-cyan-500 hover:bg-cyan-600 text-white" onClick={() => router.push("/logout")}>
//                 <LogOut className="h-4 w-4 mr-2" />
//                 Logout
//               </Button>
//             </div>
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-blue-50">
//                 <th className="py-3 px-4 text-left font-medium text-gray-700">Upload Date</th>
//                 <th className="py-3 px-4 text-left font-medium text-gray-700">Categories</th>
//                 <th className="py-3 px-4 text-left font-medium text-gray-700">Blog Name</th>
//                 <th className="py-3 px-4 text-left font-medium text-gray-700">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentBlogs.map((blog) => (
//                 <tr key={blog.id} className="border-b border-gray-200 hover:bg-gray-50">
//                   <td className="py-4 px-4 text-gray-600">{formatDate(blog.date)}</td>
//                   <td className="py-4 px-4 text-gray-600">
//                     {blog.categories ? blog.categories.join(", ") : "No Categories"}
//                   </td>
//                   <td className="py-4 px-4 text-gray-600">{blog.title}</td>
//                   <td className="py-4 px-4">
//                     <div className="flex gap-2">
//                       <Button
//                         variant="ghost"
//                         className="text-blue-500 hover:text-blue-700"
//                         onClick={() => router.push(`/editBlog/${blog.id}`)}
//                       >
//                         Edit
//                       </Button>
//                       <Button
//                         variant="ghost"
//                         className="text-red-500 hover:text-red-700"
//                         onClick={() => handleDelete(blog.id)}
//                       >
//                         Delete
//                       </Button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {totalPages > 1 && (
//           <Pagination className="mt-6">
//             <PaginationContent>
//               <PaginationItem>
//                 <PaginationPrevious
//                   href="#"
//                   onClick={(e) => {
//                     e.preventDefault()
//                     if (currentPage > 1) setCurrentPage(currentPage - 1)
//                   }}
//                 />
//               </PaginationItem>

//               {Array.from({ length: Math.min(totalPages, 5) }).map((_, index) => {
//                 const pageNumber = index + 1
//                 return (
//                   <PaginationItem key={pageNumber}>
//                     <PaginationLink
//                       href="#"
//                       isActive={currentPage === pageNumber}
//                       onClick={(e) => {
//                         e.preventDefault()
//                         setCurrentPage(pageNumber)
//                       }}
//                     >
//                       {pageNumber}
//                     </PaginationLink>
//                   </PaginationItem>
//                 )
//               })}

//               {totalPages > 5 && (
//                 <>
//                   <PaginationItem>
//                     <PaginationEllipsis />
//                   </PaginationItem>
//                   <PaginationItem>
//                     <PaginationLink
//                       href="#"
//                       onClick={(e) => {
//                         e.preventDefault()
//                         setCurrentPage(totalPages)
//                       }}
//                     >
//                       {totalPages}
//                     </PaginationLink>
//                   </PaginationItem>
//                 </>
//               )}

//               <PaginationItem>
//                 <PaginationNext
//                   href="#"
//                   onClick={(e) => {
//                     e.preventDefault()
//                     if (currentPage < totalPages) setCurrentPage(currentPage + 1)
//                   }}
//                 />
//               </PaginationItem>
//             </PaginationContent>
//           </Pagination>
//         )}
//       </div>
//     </div>
//   )
// }

// export default BlogList

