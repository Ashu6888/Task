import React from 'react';
import { Table, Button } from 'react-bootstrap';
import classes from "./LeadTable.module.css"

const LeadTable = () => {
  return (
    <div className={classes.top_div}>
        <div className={classes.btn_div}>
            <h3>Leads</h3>
            <button>View All Leads</button>
        </div>
    <div className={classes.main_table}>
        
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Email</th>
            <th>Created Time</th>
            <th>Assignee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Carolyn Perkins</td>
            <td>New</td>
            <td>eileen_h@hotmail.com</td>
            <td>12/06/2021 12:53</td>
            <td>Carrie Harris</td>
          </tr>
          <tr>
            <td>Terrance Moreno</td>
            <td>Sold</td>
            <td>terrance_moreno@infotech.io</td>
            <td>23/09/2021 06:40</td>
            <td>Toni Lane</td>
          </tr>
          <tr>
            <td>Ron Vargas</td>
            <td>Sold</td>
            <td>terrance_moreno@infotech.io</td>
            <td>23/09/2021 16:40</td>
            <td>Joanne Mendoza</td>
          </tr>
          <tr>
            <td>Luke Cook</td>
            <td>Not Interested</td>
            <td>terrance_moreno@infotech.io</td>
            <td>28/09/2021 19:53</td>
            <td>Lorraine Carr</td>
          </tr>
          <tr>
            <td>Joyce Freeman</td>
            <td>In Progress</td>
            <td>joyce991@infotech.io</td>
            <td>24/09/2021 12:53</td>
            <td>Myrtle Mason</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default LeadTable;
