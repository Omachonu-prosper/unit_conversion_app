var convertTime = (value, from, to) => {
    // this is a reference from which all conversions are made
    // The acceptedUnits.fromSi is the value of the unit in comparism to the Standard International(SI) unit for Time. ie: (how many seconds will make a minute)
    const acceptedUnits = [
        {
            abbr: 's',
            fromSi: 1
        },
        {
            abbr: 'min',
            fromSi: 60
        },
        {
            abbr: 'h',
            fromSi: 3600
        }
    ];

    // return back value if the unit we are converting from is the same as the unit we are converting to
    if(from === to) {
        return value;
    }

    // loop through the acceptedUnits setting the apropriate unit to its fromSi value 
    acceptedUnits.forEach( unit => {
        if( unit.abbr === from ) {
            from = unit.fromSi
        } else if( unit.abbr === to ) {
            to = unit.fromSi
        }
    });

    // the opposite compared to other conversions 
    const result = value / to * from;

    return result;
}

export default convertTime = convertTime;