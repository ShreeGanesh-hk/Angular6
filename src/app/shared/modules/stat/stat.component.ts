import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
    @Input() bgClass: string;
    @Input() icon: string;
    @Input() count: number;
    @Input() label: string;
    @Input() contact: string;
    @Input() data: number;
    @Input() total: number;
    @Input() missing: number;

    @Output() event: EventEmitter<any> = new EventEmitter();

    constructor(public router: Router) {}

    ngOnInit() {}
}
