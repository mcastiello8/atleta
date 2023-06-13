import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AtletaService } from '../atleta.service';
import { Atleta } from 'src/app/model/atleta';

@Component({
  selector: 'atl-atleta-detail',
  templateUrl: './atleta-detail.component.html',
  styleUrls: ['./atleta-detail.component.css']
})
export class AtletaDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private atletaService: AtletaService, private router: Router) { }


  atletaDetail?: Atleta;

  ngOnInit(): void {

    let id = Number(this.route.snapshot.paramMap.get('id'));

    this.atletaService.findById(id).subscribe(
      (atleta: Atleta) => {
        this.atletaDetail = atleta;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  onBack() {
    this.router.navigate(['/atleta/list']);
  }
}
