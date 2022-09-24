import { TestBed } from '@angular/core/testing';

import { FlaskApiService } from './flask-api.service';

describe('FlaskApiService', () => {
  let service: FlaskApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlaskApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
