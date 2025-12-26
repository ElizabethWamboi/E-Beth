const testimonials = [
            {
                photoUrl: "https://images.unsplash.com/photo-1765804015672-c5a0b61cb389?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Amanda Smith",
                text : "I am extremely satisfied with the quality and performance of the ASUS laptop. It has exceeded all my expectations and made my work so much easier. The sleek design and powerful features make it a top choice for anyone looking for a reliable laptop.",
            },

            {
                photoUrl: "https://images.unsplash.com/photo-1764287336801-5ba6b81dceae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Emily Johnson",
                text: "I am extremely impressed with the top-notch quality of the laptops from asus. The sleek design and powerful performance make it a must-have for any tech enthusiast like me. I highly recommend asus for anyone in need of a reliable and efficient laptop",
            },

            {
                photoUrl: "https://images.unsplash.com/photo-1765506255227-2feaa9bd58ec?q=80&w=692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Sophie Johnson",
                text: "My new Asus laptop is a game-changer! The sleek design and powerful performance exceed all expectations. I highly recommend Asus for anyone in need of a reliable and efficient device.",
            },  

            {
                photoUrl: "https://images.unsplash.com/photo-1766038780820-a5c000ff0668?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Emily Johnson",
                text: "I recently purchased a laptop from ASUS and I am extremely impressed with the performance and sleek design. The laptop is perfect for both work and play, meeting all my needs effortlessly. I highly recommend ASUS for anyone in search of quality electronics.",
        },
        
        {
            photoUrl:"https://images.unsplash.com/photo-1766469295724-193a0f282de4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Emily Phillips",
            text: "I am extremely impressed with the high-quality performance and sleek design of the ASUS laptops. As a freelance designer, having a reliable laptop is essential for my work, and ASUS exceeds all my expectations. The speed and durability of their laptops make my workflow seamless and efficient",
        },    

        ]

let idx = 0

const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username")

function updateTestimonials(){
    const {photoUrl,name,text} = testimonials[idx]
    imgEl.src = photoUrl
    textEl.innerText = text
    usernameEl.innerText = name
    idx ++
    if(idx === testimonials.lenght){
        idx = 0
    }
    setTimeout(() => {
        updateTestimonials()
    },10000)
}
updateTestimonials()