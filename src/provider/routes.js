import { consts } from '../../consts';
export async function getEvents(year, month) {   
    const url = `${consts.apiUrl}/getCalendarEvents?token=${consts.token}&company_id=${consts.companyId}&date_year=${year}&date_month=${month}`; 
  try{
      const response = await fetch(`${url}`, {
        method: 'GET'
      });    
    return await response.json();
    }catch (err){
      console.log(`can't getEvents, error: ${err}`);
      return 0;
    }
}
