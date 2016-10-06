/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExtraLifeDataService } from './extra-life-data.service';

describe('Service: ExtraLifeData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtraLifeDataService]
    });
  });

  it('should ...', inject([ExtraLifeDataService], (service: ExtraLifeDataService) => {
    expect(service).toBeTruthy();
  }));
});
