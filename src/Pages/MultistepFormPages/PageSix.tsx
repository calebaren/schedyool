import React, { useState } from 'react';
import Controls from '../../Components/Controls/Controls';
import FormPages from '../FormPages';
import { Typography, Button, Grid, TextField } from '@material-ui/core';


const PageSix = (props: any) => {
    const { values, nextStep, prevStep, helpTexts, handlePackedSetsChange } = props;
    return (
        <FormPages.MiddlePage
            nextStep={nextStep}
            prevStep={prevStep}
            values={values}
        >
            <Typography variant="subtitle2" paragraph>
                Packing special sets.
            </Typography>
            <Typography variant="body2" paragraph>
                In addition, you may ask Schedyool to <em>pack</em> the students of each special grouping into a small number of classrooms in order to minimize the number of special teachers needed, like ICT or ENL.  For <strong>each</strong> special group, you need to enter one number <strong>for each grade</strong>.
            </Typography>
            <Typography variant="body2" paragraph>
                As an example, if there are 6 grades in your school and you want to specify 2 special sets of students for ICT and ENL students, you will need to enter 6 number of rooms for the ICT students (1 number for each grade) and 6 number of rooms for the ENL students for a total of 12 number of rooms. These numbers should ideally be small (between 1-3) because they are numbers of classrooms. For example, 1 room (for kindergarten), 1 room (for 1st grade), 2 rooms (for 2nd grade), 2 rooms (for 3rd grade), 1 room (for 4th grade),and 2 rooms (for 5th grade) if you are a K-5 grade school. If you have no such constraint, select <code>None</code>.  <em>Remember, you will have to enter these numbers for each special case of students!</em>
            </Typography>
            {

                values.specialSets.map((x: any, i: number) => {
                    return (
                        <div key={i}>
                            <Grid item xs={12}>
                                <Typography>
                                    {i}
                                </Typography>
                            </Grid>
                            <Grid item>
                                {[...Array(values.maxGrade)].map((y: any, j: number) => {
                                    return (
                                        <Controls.SelectField
                                            key={j}
                                            setIndex = {i}
                                            gradeIndex = {j}
                                            maxGrade={values.maxGrades}
                                            values={values}
                                            handlePackedSetsChange={handlePackedSetsChange}
                                        />
                                    )
                                })}
                            </Grid>
                        </div>
                    )
                })}
            {/* <Controls.Input
                helpText={helpTexts.numSpecialSets}
                label="Number of special sets"
                name="numSpecialSets"
                value={values.numSpecialSets}
                onInput={handleInputChange}
            /> */}
        </FormPages.MiddlePage>
    );
};

export default PageSix;