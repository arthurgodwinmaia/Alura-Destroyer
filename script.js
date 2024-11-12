if (next_lesson_button){
        let next_lesson_link = next_lesson_button.getAttribute('href');
        let parts = actual_url.split('/');
        let lessonName = parts[4];
        let lessonId = parts[6];
        console.log(`[DEBUG] Lesson_Name: ${lessonName} Lesson_Id: ${lessonId} `);

        fetch(`https://cursos.alura.com.br/course/${lessonName}/task/${lessonId}/mark-video`, {
          method: 'POST',
          credentials: 'include',
          headers: {
             'Content-Type': 'application/json',
             'Cookie': cookies
          }}).then(data => {
          console.log("[DEBUG] Lesson Done!")
          })
