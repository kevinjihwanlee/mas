const string_parser = require('./reg_exp');
const data = require('./data');


// Find taken classes

const FindClasses = (data) => {

  const taken_classes = [];

  const major_dict = {};
  const breadth_dict = {};
  const depth_dict = {};
  const project_dict = {};

  if(data["Major"]) {
    data["Major"].forEach((course) => {
      if (course.taken) {
        taken_classes.push(course.search_name);
      }
      major_dict[course.id] = string_parser(course.requirements);
    });
  }
  if(data["Breadth"]) {
    data["Breadth"].forEach((course) => {
      if (course.taken) {
        taken_classes.push(course.search_name);
      }
      breadth_dict[course.id] = string_parser(course.requirements);
    });
  }
  if(data["Depth"]) {
    data["Depth"].forEach((course) => {
      if (course.taken) {
        taken_classes.push(course.search_name);
      }
      depth_dict[course.id] = string_parser(course.requirements);
    });
  }
  if(data["Project"]) {
    data["Project"].forEach((course) => {
      if (course.taken) {
        taken_classes.push(course.search_name);
      }
      project_dict[course.id] = string_parser(course.requirements);
    });
  }


  const available_classes = [];
  const m_keys = Object.keys(major_dict);

  for (let i = 0; i < m_keys.length; i++) {
    let counter = 0;
    major_dict[m_keys[i]].forEach((course) => {
      if (taken_classes.includes(course)) {
        counter ++;
      }
    })
    if (counter == major_dict[m_keys[i]].length) {
      available_classes.push(m_keys[i])
    }
  }
  const b_keys = Object.keys(breadth_dict);
  for (let i = 0; i < b_keys.length; i++) {
    let counter = 0;
    breadth_dict[b_keys[i]].forEach((course) => {
      if (taken_classes.includes(course)) {
        counter ++;
      }
    })
    if (counter == breadth_dict[b_keys[i]].length) {
      available_classes.push(b_keys[i])
    }
  }

  const d_keys = Object.keys(depth_dict);
  for (let i = 0; i < d_keys.length; i++) {
    let counter = 0;
    depth_dict[d_keys[i]].forEach((course) => {
      if (taken_classes.includes(course)) {
        counter ++;
      }
    })
    if (counter == depth_dict[d_keys[i]].length) {
      available_classes.push(d_keys[i])
    }
  }

  const p_keys = Object.keys(project_dict);
  for (let i = 0; i < p_keys.length; i++) {
    let counter = 0;
    project_dict[p_keys[i]].forEach((course) => {
      if (taken_classes.includes(course)) {
        counter ++;
      }
    })
    if (counter == project_dict[p_keys[i]].length) {
      available_classes.push(p_keys[i])
    }
  }

  const sorted_classes = new Set(available_classes);
  const final_classes = Array.from(sorted_classes);
  return final_classes;
}

//console.log(FindClasses(data));

module.exports = FindClasses;
