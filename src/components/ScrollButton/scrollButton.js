import React, { useEffect } from "react";
import './scrollButton.css'
import { UpOutlined } from '@ant-design/icons'

export default function ScrollButton() {
  const layoutContent = document.documentElement
  function scrollToTop() {
    if (layoutContent) {
      layoutContent.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const backToTopButton = document.getElementById("to-top-button")
    function scrollFunction() {
      if (document.documentElement.scrollTop > 35) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    }
    window.onscroll = () => scrollFunction();
  }, [layoutContent])

  return (
    <div className='scroll-to-top-button' id="to-top-button">
      <UpOutlined onClick={() => scrollToTop()} />
    </div>
  )
}