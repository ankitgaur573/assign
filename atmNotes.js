let amountToWithdraw = 4600; 
let notes =     [2000, 500, 200, 100]; // types of notes
let noOfNotes = [2, 1, 3, 4];          // number of notes where ith value of notes corresponds to ith value of this array

let withdrawl = withdraw(amountToWithdraw, notes, noOfNotes); 
console.log(withdrawl);

function withdraw(sum, notes, noOfNotes) 
{;
    let lengthOfNotes;
    if(notes.length != noOfNotes.length || notes.length < 1){
        console.log("Length of notes array and noOfNotes array should be equal and greater than 0");
        return null;
    }else{
        lengthOfNotes = notes.length;
    }
	let notesTracker = new Array(lengthOfNotes).fill(0);
	
	for (let i = 0; i < lengthOfNotes; i++) 
	{ 
		if (sum >= notes[i]) 
		{ 
            let maxNotesRequired = parseInt(sum / notes[i]);
            if(maxNotesRequired > noOfNotes[i]) {
                notesTracker[i] = noOfNotes[i];
            }else{
                notesTracker[i] = parseInt(sum / notes[i]);
            } 
			sum = sum - notesTracker[i] * notes[i]; 
		} 
	}	 

    if(sum > 0){
        console.log("Specified amount cannot be withdrawn with given type or number of notes");
        return null;
    }

    let withdrawl = [];

	for (let i = 0; i < lengthOfNotes; i++) 
	{ 
		if (notesTracker[i] != 0) 
		{ 
            withdrawl.push({note: notes[i], number: notesTracker[i]});
		} 
    } 
    return withdrawl
} 
