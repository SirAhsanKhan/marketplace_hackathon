import Image from "next/image"
import Link from "next/link"
import { Clock, Calendar } from 'lucide-react'
import book from "/public/book.png"
import laptop from "/public/laptop.png"
import blog from "/public/blog.png"
import { Button } from "@/components/ui/button"
import insta from "/public/insta.png"

export default function MainTwo() {
  const blogs = [
    {
      id: 1,
      image: laptop,
      title: "Going all-in with millennial design",
      readTime: "5 min",
      date: "12th Oct 2022",
      link: "blog2"
    },
    {
      id: 2,
      image: book, 
      title: "Exploring new ways of decorating",
      readTime: "5 min",
      date: "12th Oct 2022",
      link: "blog1"
    },
    {
      id: 3,
      image: blog,
      title: "Handmade pieces that took time to make", 
      readTime: "5 min",
      date: "12th Oct 2022",
      link: "blog3"
    }
  ]

  return (
    <>
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Blogs</h2>
            <p className="text-muted-foreground">
              Find a bright ideal to suit your taste with our great selection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article key={blog.id} className="group">
                <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">{blog.title}</h3>
                <div className="mb-4">
                  <Link 
                    href={blog.link}
                    className="text-primary hover:text-primary/90 font-medium"
                  >
                    Read More
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{blog.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/about"
              className="inline-block border-b-2 border-primary pb-1 font-medium text-primary hover:text-primary/90 transition-colors"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      <div 
        className="text-center mb-10 relative bg-[#FAF4F4]"
        style={{
          backgroundImage: `url(${insta.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '450px', 
        }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl font-bold mb-4">Our Instagram</h2>
          <p className="text-gray-600 mb-6">Follow our store on Instagram</p>
          <Button variant="outline" className="rounded-full px-8">
            <Link href='https://www.instagram.com/itx_hezzi/' target="_blank" rel="noopener noreferrer">
              Follow Us
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}

