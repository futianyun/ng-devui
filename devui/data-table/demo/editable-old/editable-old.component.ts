import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { DataTableComponent } from 'ng-devui/data-table';
import { cloneDeep } from 'lodash-es';
import {
  editableOriginSource,
  genderSource
} from '../mock-data';

@Component({
  selector: 'd-editable-old',
  templateUrl: './editable-old.component.html',
})
export class EditableOldComponent implements OnInit {
  @ViewChild(DataTableComponent, { static: true }) dataTable: DataTableComponent;
  genderSource = genderSource;
  basicDataSource = cloneDeep(editableOriginSource.slice(0, 6));
  thisCellEditEnd(event) {
    console.log('cellEditEnd');
    console.log(event.rowItem);
  }

  ngOnInit() {
  }

  beforeCellEdit = () => {
    return new Promise((resolve) => {
      console.log('beforeCellEdit');
      resolve(undefined);
    });
  };

  finishEdit() {
    this.dataTable.cancelEditingStatus();
  }

}
