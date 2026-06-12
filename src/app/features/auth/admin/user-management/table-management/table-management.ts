import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-management.html',
  styleUrl: './table-management.css',
})
export class TableManagement {

  Tables = [
    {
      maBan: 1,
      tenBan: 'Bàn 01',
      sucChua: 4,
      trangThai: 'Trống'
    },
    {
      maBan: 2,
      tenBan: 'Bàn 02',
      sucChua: 6,
      trangThai: 'Đang phục vụ'
    },
    {
      maBan: 3,
      tenBan: 'Bàn 03',
      sucChua: 2,
      trangThai: 'Đã đặt trước'
    },
    {
      maBan: 4,
      tenBan: 'Bàn 04',
      sucChua: 8,
      trangThai: 'Trống'
    },
    {
      maBan: 5,
      tenBan: 'Bàn 05',
      sucChua: 4,
      trangThai: 'Đang phục vụ'
    },
    {
      maBan: 6,
      tenBan: 'Bàn 06',
      sucChua: 10,
      trangThai: 'Trống'
    }
  ];

  AddTable() {
    alert('Chức năng thêm bàn sẽ được phát triển sau');
  }

  EditTable(table: any) {
    alert(`Cập nhật ${table.tenBan}`);
  }

  DeleteTable(table: any) {

    const confirmDelete = confirm(
      `Bạn có chắc muốn xóa ${table.tenBan}?`
    );

    if (!confirmDelete) {
      return;
    }

    this.Tables = this.Tables.filter(
      x => x.maBan !== table.maBan
    );

  }

}

