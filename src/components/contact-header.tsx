"use client"

import Image from "next/image"
import Link from "next/link"
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa"

export default function ContactHeader() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative h-[300px] w-full">
        <Image src="/shopheader.png" alt="Shop Header" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <Image src="/brand.png" alt="logo" width={77} height={77} />
          <h1 className="text-4xl font-bold text-black">Contact</h1>

          <div className="mt-4 flex items-center space-x-2 text-sm text-black">
            <Link href="/" className="underline underline-offset-2 hover:underline">
              Home
            </Link>
            <span>›</span>
            <Link className="hover:underline" href="/about">
              Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="flex-grow px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Get In Touch With Us</h2>
            <p className="text-gray-600">
              For more information about our products and services, please feel free to contact us. Our staff will
              always be there to help you out.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-black text-2xl" />
                <div>
                  <h3 className="text-lg font-medium">Address</h3>
                  <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaPhone className="text-black text-2xl" />
                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p className="text-gray-600">Mobile: (+84) 546-6789</p>
                  <p className="text-gray-600">Hotline: (+84) 456-6789</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaClock className="text-black text-2xl" />
                <div>
                  <h3 className="text-lg font-medium">Working Time</h3>
                  <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
                  <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#FDF7FC] px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Free Delivery</h3>
            <p className="text-sm text-muted-foreground">For all orders over $50, consectetur adipim scing elit.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">90 Days Return</h3>
            <p className="text-sm text-muted-foreground">If goods have problems, consectetur adipim scing elit.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Secure Payment</h3>
            <p className="text-sm text-muted-foreground">100% secure payment, consectetur adipim scing elit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

