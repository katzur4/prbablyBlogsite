import React from 'react';
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsGithub, BsTwitter, BsYoutube } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-600'>
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-bold dark:text-white'>
                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Its me</span>
                    Wesley~
                </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>    
                        <Footer.Title title="About" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="https://9gag.com" target="_blank" rel="noopener noreferrer">
                                Memes
                            </Footer.Link>
                            <Footer.Link href="/about" target="_blank" rel="noopener noreferrer">
                                My Blog
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>    
                        <Footer.Title title="Follow Me" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="https://twitter.com/tr3e22" target="_blank" rel="noopener noreferrer">
                                Twitter
                            </Footer.Link>
                            <Footer.Link href="https://github.com/katzur4" target="_blank" rel="noopener noreferrer">
                                Github
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>    
                        <Footer.Title title="Legal" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                                Terms and Condition
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>  
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href="#" by="John Wesley Valentino" year={new Date().getFullYear()} />
            
                <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                    <Footer.Icon href="https://facebook.com/johnwesley.valentino" icon={BsFacebook} target="_blank" />
                    <Footer.Icon href="https://instagram.com/katzur4" icon={BsInstagram} target="_blank" />
                    <Footer.Icon href="https://github.com/katzur4" icon={BsGithub} target="_blank" />
                    <Footer.Icon href="https://twitter.com/tr3es2" icon={BsTwitter} target="_blank" />
                    <Footer.Icon href="https://www.youtube.com/@katzur4/" icon={BsYoutube} target="_blank" />
                </div>
            </div>
        </div>
    </Footer>
  )
}
