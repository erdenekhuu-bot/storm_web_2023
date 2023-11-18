
export  function Header(){
    return (
        <header>
            <h1>My Dashboard</h1>
        </header>
    )
  
}

export function Nav(){
    return (
        <nav>
        <ul>
            <li><a href="#dashboard">Home</a></li>
            <li><a href="#reports">Home</a></li>
            <li><a href="#analytics">Home</a></li>
        </ul>
    </nav>
    )
}
export function Container(){
    return (
        <div class="container">
        <aside>
            <ul>
                <li><a href="#settings">Settings</a></li>
                <li><a href="#profile">Profile</a></li>
                <li><a href="#help">Help</a></li>
            </ul>
        </aside>
        <main>
            <section id="dashboard">
                <h2>Dashboard Overview</h2>
            </section>
            <section id="reports">
                <h2>Reports</h2>
            </section>
            <section id="analytics">
                <h2>Analytics</h2>
            </section>
        </main>
    </div>
    )
}
export  function Footer(){
    return (
        <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>About Us</h3>
                <p>Information about the company or website.</p>
            </div>
            <div class="footer-section">
                <h3>Contact Information</h3>
                <p>Email: contact@example.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
            <div class="footer-section">
                <h3>Follow Us</h3>
                <p>Social media links.</p>
            </div>
        </div>
        <div class="footer-bottom">
            &copy; 2023 My Dashboard | Designed by Me
        </div>
    </footer>
    )
}