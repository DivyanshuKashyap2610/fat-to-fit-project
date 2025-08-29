document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        burger.querySelector('i').classList.toggle('fa-times');
    });

   // Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinks.classList.remove('active');
            burger.querySelector('i').classList.remove('fa-times');

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Menu Tab Functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuCategories = document.querySelectorAll('.menu-category');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and categories
            tabBtns.forEach(btn => btn.classList.remove('active'));
            menuCategories.forEach(category => category.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show the corresponding category
            const categoryId = this.getAttribute('data-category');
            document.getElementById(categoryId).classList.add('active');
        });
    });

    // Header Scroll Effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.9)';
            header.style.padding = '15px 0';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.8)';
            header.style.padding = '20px 0';
        }
    });

    // Reservation Form Submission
    const reservationForm = document.getElementById('reservationForm');
    
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send this data to a server
        console.log('Reservation Details:', {
            name,
            email,
            phone,
            date,
            time,
            guests,
            message
        });
        
        // Show success message
        alert(`Thank you, ${name}! Your reservation for ${guests} people on ${date} at ${time} has been received. We'll contact you shortly to confirm.`);
        
        // Reset form
        reservationForm.reset();
    });

    // Initialize date picker with min date as today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').setAttribute('min', today);
});
