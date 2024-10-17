import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, "login-page");
  } 
  ngOnInit(): void {
    
  }
}

