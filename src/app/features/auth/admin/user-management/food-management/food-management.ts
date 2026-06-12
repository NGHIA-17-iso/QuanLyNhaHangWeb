import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-food-management',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './food-management.html',
  styleUrl: './food-management.css'
})
export class FoodManagement {

  SearchText = '';

  Foods = [
    {
      maMon: 1,
      tenMon: 'Phở bò',
      loaiMon: 'Món nước',
      gia: 50000,
      hinhAnh: '🍜',
      trangThai: true
    },
    {
      maMon: 2,
      tenMon: 'Cơm gà',
      loaiMon: 'Cơm',
      gia: 45000,
      hinhAnh: '🍛',
      trangThai: true
    },
    {
      maMon: 3,
      tenMon: 'Bún chả',
      loaiMon: 'Bún',
      gia: 55000,
      hinhAnh: '🍲',
      trangThai: false
    },
    {
      maMon: 4,
      tenMon: 'Trà đào',
      loaiMon: 'Nước uống',
      gia: 30000,
      hinhAnh: '🥤',
      trangThai: true
    }
  ];

  get FilteredFoods() {

    return this.Foods.filter(food =>
      food.tenMon.toLowerCase()
        .includes(this.SearchText.toLowerCase())
    );

  }

  AddFood() {
    alert('Chức năng thêm món sẽ được phát triển sau');
  }

  EditFood(food: any) {
    alert(`Cập nhật ${food.tenMon}`);
  }

  DeleteFood(food: any) {

    const confirmDelete = confirm(
      `Bạn có chắc muốn xóa ${food.tenMon}?`
    );

    if (!confirmDelete) {
      return;
    }

    this.Foods = this.Foods.filter(
      x => x.maMon !== food.maMon
    );

  }

}
