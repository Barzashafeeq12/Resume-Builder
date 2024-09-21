const form = document.getElementById('resumeForm') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const mobileInput = document.getElementById('mobileNumber') as HTMLInputElement;
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
const knowledgeInput = document.getElementById('knowledge') as HTMLTextAreaElement;
const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
const languagesInput = document.getElementById('languages') as HTMLTextAreaElement;


form.addEventListener('submit', (event) => {
    event.preventDefault(); 
 
    const resumeData = {
        name: nameInput.value,
        email: emailInput.value,
        mobileNumber: mobileInput.value,
        profilePicture: profilePictureInput.files ? profilePictureInput.files[0] : null,
        knowledge: knowledgeInput.value,
        experience: experienceInput.value,
        skills: skillsInput.value,
        languages: languagesInput.value
    };
    console.log('Resume Data:', resumeData);

});

