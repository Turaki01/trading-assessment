import { Component, OnInit } from '@angular/core';
import {AccountFeaturesInterface} from "../../interfaces/accounts";
import {AccountFeatures} from "../../UI-data/accounts";
import {FeaturesInterface} from "../../interfaces/features";
import {FeaturesData, SubFeatureData} from "../../UI-data/features";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  ListOfAccountFeatures: AccountFeaturesInterface[] = AccountFeatures;
  ListOfFeatures: FeaturesInterface[] = FeaturesData;
  ListOfSubFeatures: FeaturesInterface[] = SubFeatureData;

  ActiveScreen: number = 1

  constructor() { }

  ngOnInit(): void {
  }

  toggleActiveScreen(index: number): void {
    this.ActiveScreen = index
  }

}
