var convertLength = (value, from, to) => {
    // this is a reference from which all conversions are made
    // The acceptedUnits.fromSi is the value of the unit in comparism to the Standard International(SI) unit for length ie: (how many milimeters will make a meter)
    const acceptedUnits = [
        {
            abbr: 'mm',
            fromSi: 1000
        },
        {
            abbr: 'cm',
            fromSi: 100
        },
        {
            abbr: 'm',
            fromSi: 1
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

    const result = value / from * to;

    return result;
}

export default convertLength = convertLength;