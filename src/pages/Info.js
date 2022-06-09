import { useNavigate } from "react-router-dom";
import "../css/info.css";

export default function Info() {
    const navigate = useNavigate();

    const pushHandler = () => {
        navigate("/");
        localStorage.setItem("back", JSON.stringify("center"));
    };
    return (
        <>
            <div className="root">
                <nav className="header">
                    <span className="basictxt"> Page 2 </span>
                </nav>
                <section className="infoBody">
                    Who Moved My Cheese? features four characters: two mice, "Sniff" and
                    "Scurry," and two Littlepeople, human metaphor, "Hem" and "Haw." (The
                    names of the Littlepeople are taken from the phrase "hem and haw," a
                    term for indecisiveness.) They live in a maze, a representation of
                    one's environment, and look for cheese, representative of happiness
                    and success. Initially without cheese, each group, the mice and
                    humans, paired off and traveled the lengthy corridors searching for
                    cheese. One day both groups happen upon a cheese-filled corridor at
                    "Cheese Station C." Content with their find, the humans establish
                    routines around their daily intake of cheese, slowly becoming arrogant
                    in the process. One day Sniff and Scurry arrive at "Cheese Station C"
                    to find no cheese left, but they are not surprised. Noticing the
                    cheese supply dwindling, they have mentally prepared beforehand for
                    the arduous but inevitable task of finding more cheese. Leaving
                    "Cheese Station C" behind, they begin their hunt for new cheese
                    together. Later that day, Hem and Haw arrive at Cheese Station C only
                    to find the same thing, no cheese. Angered and annoyed, Hem demands,
                    "Who moved my cheese?" The humans have counted on the cheese supply to
                    be constant, and so are unprepared for this eventuality. After
                    deciding that the cheese is indeed gone they get angry at the
                    unfairness of the situation. Haw suggests a search for new cheese, but
                    Hem is dead-set in his disappointment and dismisses the proposal.
                    Meanwhile, Sniff and Scurry have found "Cheese Station N," and new
                    cheese. But back at Cheese Station C, Hem and Haw are affected by
                    their lack of cheese and blame each other for their problem. Hoping to
                    change, Haw again proposes a search for new cheese. However, Hem is
                    comforted by his old routine and is frightened about the unknown. He
                    knocks the idea again. After a while of being in denial, the humans
                    remain without cheese. One day, having discovered his debilitating
                    fears, Haw begins to chuckle at the situation and stops taking himself
                    so seriously. Realizing he should simply move on, Haw enters the maze,
                    but not before chiseling "If You Do Not Change, You Can Become
                    Extinct" on the wall of Cheese Station C for his friend to ponder.
                    Still fearful of his trek, Haw jots "What Would You Do If You Weren't
                    Afraid?" on the wall and, after thinking about that, he begins his
                    venture. Still plagued with worry (perhaps he has waited too long to
                    begin his search...), Haw finds some bits of cheese that nourish him
                    and he is able to continue his search. Haw realizes that the cheese
                    has not suddenly vanished, but has dwindled from continual eating.
                    After a stop at an empty cheese station, Haw begins worrying about the
                    unknown again. Brushing aside his fears, Haw's new mindset allows him
                    to again enjoy life. He has even begun to smile again! He is realizing
                    that "When you move beyond your fear, you feel free." After another
                    empty cheese station, Haw decides to go back for Hem with the few bits
                    of new cheese he has managed to find. Uncompromising, Hem refuses the
                    new cheese, to his friend's disappointment. With knowledge learned
                    along the way, Haw heads back into the maze. Getting deeper into the
                    maze, inspired by bits of new cheese here and there, Haw leaves a
                    trail of writings on the wall ("The Handwriting On the Wall"). These
                    clarify his own thinking and give him hope that his friend will find
                    aid in them during his search for new cheese. Still traveling, Haw one
                    day comes across Cheese Station N, abundant with cheese, including
                    some varieties that are strange to him, and he realizes he has found
                    what he was looking for. After eating, Haw reflects on his experience.
                    He ponders a return to see his old friend. But Haw decides to let Hem
                    find his own way. Finding the largest wall in Cheese Station N, he
                    writes:
                </section>
                <footer>
                    <button onClick={pushHandler} className="eventButton">
                        &#8249; Back
                    </button>
                </footer>
            </div>
        </>
    );
}