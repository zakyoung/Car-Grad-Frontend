import { ExperimentEntry } from '../Model/ExperimentEntry.js';

class ExperimentHelper {
  constructor() {
    this.apiUrl = 'https://api.carperiment.com/all-entries';
  }

  async fetchEntries() {
    try {
      const response = await fetch(this.apiUrl);
      const data = await response.json();
      let entries = this.createEntriesFromResponse(data);
      entries.sort((a, b) => new Date(b.experiment_time) - new Date(a.experiment_time));
  
      console.log("Experiment entries have been created and sorted");
      return entries;
    } catch (error) {
      console.error("Error fetching experiment entries:", error);
      return [];
    }
  }
  

  createEntriesFromResponse(data) {
    return data.map(entry => new ExperimentEntry(
      entry.user_name,
      entry.experiment_time,
      parseFloat(entry.final_distance),
      Boolean(entry.experiment_type),
      parseInt(entry.initial_speed),
      parseInt(entry.deceleration_of_front_car_stop_time),
      parseInt(entry.initial_distance)
    ));
  }
}

export default ExperimentHelper;
