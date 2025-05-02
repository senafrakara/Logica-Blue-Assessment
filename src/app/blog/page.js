import Image from "next/image";

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relativ">
        <div className="absolute inset-0 bg-opacity-5 bg-gradient-conic pattern-grid-lg"></div>
        <header className="relative container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Web Dev Blog
          </h1>
          <p className="text-lg mt-4 text-gray-600 max-w-xl mx-auto">
            Exploring the Future of Web Development
          </p>
          <div className="mt-8 w-24 h-1 bg-amber-500 mx-auto"></div>
        </header>
      </div>

      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <article className="flex-1">
            <div className="relative rounded-xl overflow-hidden shadow-sm mb-8">
              <Image
                src="https://picsum.photos/600"
                alt="Web Development"
                width={800}
                height={400}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
                <span className="text-xs font-medium px-3 py-1 bg-amber-500 text-white rounded-full">
                  Featured
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
                The Future of Web Development
              </h2>

              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Jane Smith</p>
                  <p className="text-xs text-gray-500">May 1, 2025 · 5 min read</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Web development is constantly evolving, with new technologies emerging regularly. From modern JavaScript frameworks like React and Vue to the growing importance of web performance, it's essential to stay on top of the latest trends.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Stay tuned for more insights on the latest trends in web development!
              </p>

              <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                <button className="group flex items-center text-gray-600 hover:text-amber-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>
                <button className="group flex items-center text-gray-600 hover:text-amber-600 transition-colors">
                  Next
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-12">
              <h3 className="text-xl font-serif font-semibold text-white mb-6 flex items-center">
                <span className="h-px flex-1 text-white mr-4"></span>
                Related Posts
                <span className="h-px flex-1 text-white ml-4"></span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="group bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-video relative bg-gray-100">
                      <Image
                        src="https://picsum.photos/600"
                        alt={`Related post ${index}`}
                        width={400}
                        height={225}
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-medium text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                        Web Development Trends {index}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        Web development is constantly evolving, with new technologies emerging regularly.
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center">
                        <span className="text-xs text-gray-500">Apr {20 + index}, 2025</span>
                        <span className="text-xs font-medium text-amber-600">Read more</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="w-full lg:w-80">
            <div className="rounded-xl shadow-sm p-6 border border-gray-100 sticky top-6">
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-xl font-serif font-semibold text-white">Recent Posts</h3>
              </div>

              <ul className="space-y-4">
                {['React vs Vue', 'CSS Grid Layout', 'JavaScript ES6+'].map((post, index) => (
                  <li key={index} className="group">
                    <a href="#" className="flex items-center p-3 -mx-3 rounded-lg hover:bg-gradient-radial hover:from-gray-50 hover:to-gray-100 transition-colors">
                      <span className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center text-gray-400 mr-4">
                        {index + 1}
                      </span>
                      <span className="font-medium text-gray-700 group-hover:text-amber-600 transition-colors">
                        {post}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-medium text-gray-800 mb-4">Join Our Newsletter</h4>
                <p className="text-sm text-gray-600 mb-4">Get the latest updates and articles delivered straight to your inbox.</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 rounded-l-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-r-lg transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="border-t border-gray-100 py-12 mt-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-serif font-bold text-white">Web Dev Blog</h3>
              <p className="text-sm text-gray-600 mt-2">Exploring the future of web development</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">&copy; 2025 Web Dev Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}