// Basic JavaScript Variables and Operations
var a = 10;
var b = 20;
console.log(a + b); // Output: 30
console.log("It's cool");

// Alert to welcome users
alert("Welcome to Cat World! 🐱");

// Confirm if user is an adult
var isAdult = confirm("Are you an adult? (This helps us show appropriate content)");
console.log("User is adult:", isAdult);

// Prompt for user name
var userName = prompt("Enter your name to personalize your experience:");
console.log("User name is:", userName);

// Variables with different declarations
let x = 10;
const y = 15;
console.log("x + y =", x + y);

// Array of cat names
var catNames = ["Fluffy", "Shadow", "Whiskers", "Luna", "Simba", "Mittens"];
console.log("Number of cats:", catNames.length);
console.log("All cat names:", catNames);

// DOM Manipulation - Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Selection of Elements and Changing HTML
    var mainHeading = document.querySelector('.header h1');
    if (userName && userName.trim() !== "") {
        mainHeading.innerHTML = `Welcome ${userName} to Cat World! 🐱`;
    }
    
    // 2. Changing CSS Styles
    var header = document.querySelector('.header');
    header.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4)';
    
    // 3. More DOM selections and changes
    var catCards = document.querySelectorAll('.cat-card');
    
    // Add click event to each cat card
    catCards.forEach(function(card, index) {
        // 4. Event Listeners
        card.addEventListener('click', function() {
            // Change the card style when clicked
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
            
            // Get cat name from the card
            var catName = this.querySelector('h3').textContent;
            alert(`You clicked on ${catName}! 🐾`);
            
            // Reset style after 2 seconds
            setTimeout(function() {
                card.style.transform = 'scale(1)';
                card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            }, 2000);
        });
        
        // Add hover effect with JavaScript
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f8ff';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'white';
        });
    });
    
    // 5. Form handling
    var contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form from actually submitting
        
        var nameInput = document.querySelector('input[type="text"]');
        var emailInput = document.querySelector('input[type="email"]');
        var messageInput = document.querySelector('textarea');
        
        if (nameInput.value && emailInput.value && messageInput.value) {
            alert(`Thank you ${nameInput.value}! Your message has been received. We'll contact you at ${emailInput.value} soon! 📧`);
            
            // Clear the form
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
        } else {
            alert('Please fill in all fields! 📝');
        }
    });
    
    // 6. Dynamic content - Add random cat fact
    var factsSection = document.querySelector('.facts-section ul');
    var randomFacts = [
        "Cats can rotate their ears 180 degrees",
        "A cat's nose print is unique, like a human fingerprint",
        "Cats spend 30-50% of their day grooming",
        "Cats can jump up to 6 times their length"
    ];
    
    // Add a random fact every 10 seconds
    setInterval(function() {
        var randomFact = randomFacts[Math.floor(Math.random() * randomFacts.length)];
        var newFactItem = document.createElement('li');
        newFactItem.textContent = randomFact;
        newFactItem.style.backgroundColor = '#e3f2fd';
        newFactItem.style.animation = 'fadeIn 0.5s ease-in';
        
        factsSection.appendChild(newFactItem);
        
        // Remove the fact after 8 seconds to avoid too many facts
        setTimeout(function() {
            if (factsSection.contains(newFactItem)) {
                factsSection.removeChild(newFactItem);
            }
        }, 8000);
    }, 10000);
    
    // 7. Navigation smooth scrolling
    var navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Simple scroll effect
            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId) || document.querySelector(`.${targetId}-section`);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 8. Interactive cat counter
    var catCounter = 0;
    var counterDisplay = document.createElement('div');
    counterDisplay.innerHTML = `<h3>Cats Petted: <span id="catCount">0</span> 🐾</h3>`;
    counterDisplay.style.position = 'fixed';
    counterDisplay.style.top = '10px';
    counterDisplay.style.right = '10px';
    counterDisplay.style.backgroundColor = '#333';
    counterDisplay.style.color = 'white';
    counterDisplay.style.padding = '10px';
    counterDisplay.style.borderRadius = '5px';
    counterDisplay.style.zIndex = '1000';
    
    document.body.appendChild(counterDisplay);
    
    // Update counter when cats are clicked
    catCards.forEach(function(card) {
        card.addEventListener('click', function() {
            catCounter++;
            document.getElementById('catCount').textContent = catCounter;
        });
    });
    
    // 9. Time-based greeting
    var currentHour = new Date().getHours();
    var greeting = "";
    
    if (currentHour < 12) {
        greeting = "Good Morning";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }
    
    // Update the header subtitle
    var headerSubtitle = document.querySelector('.header p');
    headerSubtitle.textContent = `${greeting}! The best place for cat lovers!`;
    
    // 10. Console messages for debugging
    console.log("🐱 Cat Website JavaScript loaded successfully!");
    console.log("Available cats:", catNames);
    console.log("Current time greeting:", greeting);
    console.log("DOM manipulation complete!");
});

// Additional array methods demonstration
var catAges = [2, 3, 1, 5, 4, 2];
console.log("Cat ages:", catAges);
console.log("Average cat age:", catAges.reduce((a, b) => a + b, 0) / catAges.length);

// Function to generate random cat fact
function getRandomCatFact() {
    var facts = [
        "Cats have a third eyelid called a nictitating membrane",
        "Cats can make over 100 different vocal sounds",
        "A group of cats is called a clowder",
        "Cats sleep 70% of their lives"
    ];
    return facts[Math.floor(Math.random() * facts.length)];
}

console.log("Random cat fact:", getRandomCatFact());

