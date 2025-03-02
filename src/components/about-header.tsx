'use client'

import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import shopheader from "/public/shopheader.png"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Search } from 'lucide-react'
import laptop from "/public/laptop.png"
import book from "/public/book.png"
import blog from "/public/blog.png"
import { Button } from "./ui/button"

interface BlogPost {
  title: string
  date: string
  excerpt: string
  image: string | StaticImageData
  author: string
  category: string
  slug: string
}

const recentPosts: BlogPost[] = [
 
  {
    title: "Embracing Modern Minimalism",
    date: "29 Jan 2025",
    excerpt: "Discover the art of creating clean, clutter-free spaces that exude elegance. Learn how to balance simplicity with functionality in your home decor projects.",
    image: laptop,
    author: "Admin",
    category: "Design",
    slug: "blog1"
  },
  {
    title: "Creative Ways to Personalize Your Space",
    date: "29 Jan 2025",
    excerpt: "Unleash your creativity by incorporating personal touches into your interior decor. From custom artwork to DIY projects, make your space truly your own.",
    image: book,
    author: "Admin",
    category: "Interior",
    slug: "blog2"
  },
  {
    title: "The Beauty of Handmade Creations",
    date: "29 Jan 2025",
    excerpt: "Celebrate craftsmanship and individuality with handmade pieces. Explore how these unique items can add warmth and character to your home.",
    image: blog,
    author: "Admin",
    category: "Handmade",
    slug: "blog3"
  }
]


const categories = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Handmade", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Wood", count: 6 }
]

export default function BlogPost() {
  return (
    <>
     {/* Hero Section with Background */}
     <div className="relative h-[300px] w-full">
     <Image
       src={shopheader}
       alt="Shop Header"
       fill
       className="object-cover"
       priority
     />
     <div className="absolute inset-0 bg-black/20" />
     <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
       {/* Logo */}
          <Image src='/brand.png' alt="logo" width={77} height={77} />
       <h1 className="text-4xl font-bold text-black">Blog</h1>
       {/* Breadcrumb */}
       <div className="mt-4 flex items-center space-x-2 text-sm text-black">
         <Link href="/" className="underline underline-offset-2 hover:underline">
           Home
         </Link>
         <span>›</span>
         <span>Blog</span>
       </div>
     </div>
   </div>
    <div className="container mx-auto px-4 py-8 lg:px-6">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <main className="lg:col-span-8">
          <div className="space-y-8">
            {recentPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span>•</span>
                    <time dateTime={post.date}>{post.date}</time>
                    <span>•</span>
                    <span>{post.category}</span>
                  </div>
                  <h2 className="mb-4 text-2xl font-semibold tracking-tight">{post.title}</h2>
                  <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                  <Link
                    href={post.slug}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline" 
                  >
                    Read more
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </main>

        <section className="lg:col-span-4">
          <div className="sticky top-8 space-y-8">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search posts..."
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href='https://wordpress.com/discover?selectedTab=firstposts'
                    className="flex items-center justify-between rounded-lg px-4 py-2 hover:bg-muted" target="_blank"
                  >
                    <span className="text-muted-foreground">{category.name}</span>
                    <span className="text-sm text-muted-foreground">{category.count}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold">Recent Posts</h2>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <Link
                    key={index}
                    href='https://wordpress.com/discover?selectedTab=firstposts'
                    className="group flex gap-4" target="_blank"
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium leading-snug group-hover:underline">
                        {post.title}
                      </h3>
                      <time className="text-sm text-muted-foreground">{post.date}</time>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div className="w-full space-y-20">
      <div className="flex justify-center gap-2">
        <Button
          variant="secondary"
          className="h-8 w-8 bg-[#FBEBB5] p-0 text-black hover:bg-[#fdebb3]/90"
        >
          1
        </Button>
        <Button
          variant="ghost"
          className="h-8 w-8 p-0 bg-[#fcf6e8] text-black hover:bg-[#FFF8E7]/90"
        >
          2
        </Button>
        <Button
          variant="ghost"
          className="h-8 w-8 p-0 bg-[#fcf6e8] text-black hover:bg-[#FFF8E7]/90"
        >
          3
        </Button>
        <Button
          variant="ghost"
          className="px-4 bg-[#fcf6e8] text-black hover:bg-[#FFF8E7]/90"
        >
          Next
        </Button>
      </div>

      {/* Features */}
      <div className="bg-[#FDF7FC] px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Free Delivery</h3>
            <p className="text-sm text-muted-foreground">
              For all orders over $50, 
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">90 Days Return</h3>
            <p className="text-sm text-muted-foreground">
              If goods have problems, 
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Secure Payment</h3>
            <p className="text-sm text-muted-foreground">
              100% secure payment, 
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

