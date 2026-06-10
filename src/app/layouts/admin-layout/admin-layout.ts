import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout implements OnInit {
  FullName = 'Admin';

  Role = 'Quản lý';

  Avatar = 'A';

  ngOnInit(): void {

    const currentUser =
      localStorage.getItem('currentUser');

    if (currentUser) {

      const user =
        JSON.parse(currentUser);

      this.FullName =
        user.fullName;

      this.Role =
        user.role;

      this.Avatar =
        user.fullName
          .charAt(0)
          .toUpperCase();

    }

  }
}
