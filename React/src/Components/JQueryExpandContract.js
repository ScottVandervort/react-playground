import React from 'react';
import $ from 'jquery';

class JQueryExpandContract extends React.Component {
  
    constructor () {
      super();

      this.state = [
        { key: 0, name: 'Homer Simpson', desc: "Homer and his wife Marge have three children: Bart, Lisa, and Maggie. As the family's provider, he works at the Springfield Nuclear Power Plant as safety inspector. Homer embodies many American working class stereotypes: he is crude, bald, hot-tempered, obese, rule-neglecting, clumsy, lazy, heavy drinking, ignorant and idiotic; however, he is essentially a decent man and fiercely devoted to his family, often ignoring his own personal interests for those of his family. Despite the suburban blue-collar routine of his life, he has had a number of remarkable experiences, including going to space, climbing the tallest mountain in Springfield by himself, fighting former President George H. W. Bush, and winning a Grammy Award as a member of a barbershop quartet."},
        { key: 1, name: 'Marge Simpson', desc: "Marge is the matriarch of the Simpson family. With her husband Homer, she has three children: Bart, Lisa, and Maggie. Marge is the moralistic force in her family and often provides a grounding voice in the midst of her family's antics by trying to maintain order in the Simpson household. She is often portrayed as a stereotypical television mother and is often included on lists of top 'TV moms'. She has appeared in other media relating to The Simpsons—including video games, The Simpsons Movie, The Simpsons Ride, commercials, and comic books—and inspired an entire line of merchandise."},
        { key: 2, name: 'Bart Simpson', desc: "At ten years old, Bart is the eldest child and only son of Homer and Marge, and the brother of Lisa and Maggie. Bart's most prominent and popular character traits are his mischievousness, rebelliousness and disrespect for authority. He has appeared in other media relating to The Simpsons – including video games, The Simpsons Movie, The Simpsons Ride, commercials, and comic books – and inspired an entire line of merchandise."},
        { key: 3, name: 'Lisa Simpson', desc: "Intelligent, passionate, and the moral center of the family, Lisa Simpson, at eight years old, is the second child of Homer and Marge, younger sister of Bart, and older sister of Maggie. Lisa's high intellect and liberal political stance creates a barrier between her and other children her age, therefore she is a bit of a loner and social outcast. Lisa is a vegetarian, a strong environmentalist, a feminist, and a Buddhist. Lisa's character develops many times over the course of the show: she becomes a vegetarian in season 7 and converts to Buddhism in season 13. A strong liberal, Lisa advocates for a variety of political causes (e.g. standing with the Tibetan independence movement) which usually sets her against most of the people in Springfield. However, she can also be somewhat intolerant of opinions that differ from her own, often refusing to consider alternative perspectives. In her free time, Lisa enjoys many hobbies such as reading and playing the baritone saxophone, despite her father's annoyance regarding the latter. She has appeared in other media relating to The Simpsons – including video games, The Simpsons Movie, The Simpsons Ride, commercials and comic books – and inspired a line of merchandise."},
        { key: 4, name: 'Maggie Simpson', desc: "Maggie is the youngest child of Homer and Marge, and sister to Bart and Lisa. She is often seen sucking on her red pacifier and, when she walks, she trips over her clothing and falls on her face (this running gag is used much more in earlier seasons). Being an infant, she has not learned how to talk. She is a counterpart to Lisa Simpson. However, she did appear to talk in the first Tracey Ullman Show short."}
      ];
    }


    render() {

        // Use the map and ES6 (...) expander to render a list of Child Components where each list item's data is a unique property.
        var itemsAsComponents = this.state.map(function(item) {
          return (<SimpleArticle {...item}/>);
      })


      return (
        <div>
            <h3>Expand/Contract - JQuery</h3>  
            <p>For dynamic height / width elements use Javascript-based transitions - such as JQuery.</p>        
            {itemsAsComponents}             
        </div>
      );
    }    
  }
    
  class SimpleArticle extends React.Component {

    expandOrContract(e) {
      // Click event handler.
      
      //$(this.container).slideToggle("slow",function() {});

      $(this.state.container).slideToggle("slow",function() {});
    }    

    setContainer(e) {
      // Get a handle to the DOM element that needs to be toggled.
      
      //this.container = e;

      if (this.state == null || this.state.container == null)
        this.setState({"container" : e});
    }    

    render() {    
        return(
          <article>
            <h2 onClick={(e) => this.expandOrContract(e)}>{this.props.name}</h2>
              <div className='panel' ref={(e) => this.setContainer(e)} >{this.props.desc}</div>                         
          </article>
        );
    }  
  }

  export default JQueryExpandContract;