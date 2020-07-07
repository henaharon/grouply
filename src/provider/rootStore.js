import {observable, action, flow} from 'mobx';
import {getEvents} from './routes'

class rootStore {

  @observable userName = 'ישראל ישראלי';
  @observable year = '2020';
  @observable month = '1';
  @observable eventsList = [];
  @observable errorMsg = null;
  @observable loading = false;

  @action
  setMonth(value){
    this.month = value;
    this.getEvents();
  }

  @action
  setYear(value){
    this.year = value;
    this.getEvents();
  }

   @action
   getEvents = flow(function*() {
     try {
           this.loading = true;
           const response = yield getEvents(this.year, this.month);
           if(response.status_code == 200 && response.success == 1){
             this.errorMsg = null;
              this.eventsList = response.events;
              this.loading = false;

            }
            else {
              this.errorMsg = 2;
              this.loading = false;
            }
            if(response == 0) {
              this.errorMsg = 1;
              this.loading = false;
            }  
     } catch (e) {
       this.errorMsg = 1;
       this.loading = false;
       console.log('getEvents in rootStore catch', e);
     }
   });
}

export default new rootStore();
