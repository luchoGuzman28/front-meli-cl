import React from "react";
import "./Header.css";
import logoImage from "../../assets/image/logo.png"

export default function Header(props) {
  return (
    <header>
    <nav class="navbar navbar-expand-lg header">
        <a href="/"><img src={logoImage} alt="" class="logo" /></a>
        
        <button class="navbar-toggler btn-menu" id="btn-menu" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><i class="fas fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="">Perfil</a></li>
                    <li class="nav-item"><a class="nav-link" href="">Mis Compras</a></li>
                    <li class="nav-item"><a class="nav-link" href=""></a></li>
                </ul>
            </div>
    </nav>
</header>
  );
}
