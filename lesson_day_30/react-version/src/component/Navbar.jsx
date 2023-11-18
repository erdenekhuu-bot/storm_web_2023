export default function Navbar(){
    document.addEventListener("DOMContentLoaded",function(){
        let dropdown=document.querySelector(".dropdown");
        dropdown.addEventListener("mouseover",function(){
            this.querySelector(".dropdown-content").style.display="block";
        })
        dropdown.addEventListener("mouseout",function(){
            this.querySelector(".dropdown-content").style.display="none";
        })
    })
        return(
            <nav class="navbar">
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li class="dropdown">
                        <a href="#">Menu</a>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        )
}