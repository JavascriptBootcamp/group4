const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const data = {
  songs: [
    {
      id: 1,
      title: " Billie Jean",
      singer: "Michael Jackson",
      words: `She was more like a beauty queen from a movie scene
      I said don't mind, but what do you mean, I am the one
      Who will dance on the floor in the round
      She said I am the one, who will dance on the floor in the round
      She told me her name was Billie Jean, as she caused a scene
      Then every head turned with eyes that dreamed of being the one
      Who will dance on the floor in the round
      People always told me be careful of what you do
      And don't go around breaking young girls' hearts
      And mother always told me be careful of who you love
      And be careful of what you do 'cause the lie becomes the truth
      Billie Jean is not my lover
      She's just a girl who claims that I am the one
      But the kid is not my son
      She says I am the one, but the kid is not my son
      For forty…`,
      url: "Zi_XLOBDo_Y"
    },
    {
      id: 2,
      title: "Smooth Criminal",
      singer: "Michael Jackson",
      words: `As he came into the window
      Was a sound of a crescendo
      He came into her apartment
      He left the bloodstains on the carpet
      She was sitting at the table
      He could see she was unable
      So she ran into the bedroom
      She was struck down
      It was her doom
      Annie, are you okay, you okay, you okay, Annie?
      Annie, are you okay, you okay, you okay, Annie?
      Annie, are you okay, you okay, you okay, Annie?
      Annie, are you okay, you okay, you okay, Annie?
      Annie, are you ok
      Will you tell us that you're ok
      There's a sign at the window
      That he struck you
      A crescendo, Annie
      He came into your apartment
      He left the bloodstains on the carpet
      Then you ran into the bedroom
      You were struck down
      It was your doom
      Annie, are you okay, you okay, you okay, Annie?
      Annie, are…`,
      url: "h_D3VFfhvs4"
    },
    {
      id: 3,
      title: "Black Or White",
      singer: "Michael Jackson",
      words: `I took my baby on a Saturday bang
      Boy is that girl with you 
      Yes we're one and the same
      Now I believe in miracles
      And a miracle has happened tonight
      But, if you're thinkin' about my baby
      It don't matter if you're black or white
      They print my message in the Saturday Sun
      I had to tell them I ain't second to none
      And I told about equality and it's true
      Either you're wrong or you're right
      But, if you're thinkin' about my baby
      It don't matter if you're black or white
      I am tired of this devil
      I am tired of this stuff
      I am tired of this business
      Sew when the going gets rough
      I ain't scared of your brother
      I ain'ts scared of no sheets
      I ain't scared of nobody
      Girl when the goin' gets mean
      Protection 
      For gangs, clubs, and nations
      Causing grief in human relations
      It's a turf war on a global scale
      I'd rather hear both sides of the tale
      See, it's not about races
      Just places
      Faces
      Where your blood comes from
      Is were your space is
      I've seen the bright get duller
      I'm not going to spend my life being a color
      Don't tell me you agree with me
      When I saw you kicking dirt in my eye
      But, if you're thinkin' about my baby
      It don't matter if you're black or white
      I said if you're thinkin' of being my baby
      It don't matter if you're black or white
      I said if you're thinkin' of being my brother
      It don't matter if you're black or white
      Ooh, ooh
      Yea, yea, yea now
      Ooh, ooh
      Yea, yea, yea now
      It's black, it's white
      It's tough for them to get by
      It's black, it's white, (x3) whoo`,
      url: "F2AitTPI5U0"
    },
    {
      id: 4,
      title: "Thriller",
      singer: "Michael Jackson",
      url: "https://youtu.be/sOnqjkJTMaA",
      words: `
      Ahahahahahahahaha
      It's close to midnight
      Something evil's lurking from the dark
      Under the moonlight
      You see a sight that almost stops your heart
      You try to scream
      But terror takes the sound before you make it
      You start to freeze
      As horror looks you right between your eyes
      You're paralyzed
      'Cause this is thriller
      Thriller night
      And no one's gonna save you
      From the beast about to strike
      You know it's thriller
      Thriller night
      You're fighting for your life
      Inside a killer thriller tonight, yeah
      Ahahahahahahahaha
      I'm gonna bring it tonight
      Ahahahahahahahaha
      You hear the door slam
      And realize there's nowhere left to run
      You feel the cold hand
      And wonder if you'll ever see the sun
      You close your eyes
      And hope that this is just imagination
      Girl but all the while
      You hear a creature creeping up behind
      You're out of time
      'Cause this is thriller
      Thriller night
      And no one's gonna save you
      From the beast about to strike
      You know it's thriller
      Thriller night
      You're fighting for your life
      Inside a killer thriller tonight
      Ahahahahahahahaha
      I'm gonna thrill ya tonight
      Get up, get up
      Darkness falls across the land
      The midnight hour is close at hand
      Creatures crawl in search of blood
      To terrorize y'all's neighborhood
      And whosoever shall be found
      Without the soul for getting down
      Must stand and face the hounds of hell
      And rot inside a corpse's shell
      I'm gonna thrill ya tonight 
      I'm gonna thrill ya tonight 
      Ooh, babe
      I'm gonna thrill ya tonight
      'Cause this is thriller
      'Cause this is thriller
      'Cause this is thriller
      'Cause this is thriller
      Get up, get up (I'm gonna thrill you tonight)
      I'm gonna thrill you tonight
      I'm gonna thrill you tonight
      I'm gonna thrill you tonight
      'Cause this is thriller`
    },
    {
      id: 5,
      title: "Man In The Mirror",
      singer: "Michael Jackson",
      url: "PivWY9wn5ps",
      words: `I'm gonna make a change,
      For once I'm my life
      It's gonna feel real good,
      Gonna make a difference
      Gonna make it right
      As I, turn up the collar on
      My favorite winter coat
      This wind is blowing my mind
      I see the kids in the streets,
      With not enough to eat
      Who am I to be blind?
      Pretending not to see their needs
      A summer disregard, a broken bottle top
      And a one man soul
      They follow each other on the wind ya' know
      'Cause they got nowhere to go
      That's why I want you to know
      I'm starting with the man in the mirror
      I'm asking him to change his ways
      And no message could have been any clearer
      If you want to make the world a better place
      (If you want to make the world a better place)
      Take a look at yourself, and then make a change
      (Take a look at yourself, and then make a change)
      (Na na na, na na na, na na, na nah)
      I've been a victim of a selfish kind of love
      It's time that I realize
      That there are some with no home, not a nickel to loan
      Could it be really me, pretending that they're not alone?
      A willow deeply scarred, somebody's broken heart
      And a washed-out dream
      (Washed-out dream)
      They follow the pattern of the wind ya' see
      'Cause they got no place to be
      That's why I'm starting with me
      (Starting with me!)
      I'm starting with the man in the mirror
      (Ooh!)
      I'm asking him to change his ways
      (Ooh!)
      And no message could have been any clearer
      If you want to make the world a better place
      (If you want to make the world a better place)
      Take a look at yourself, and then make a change
      (Take a look at yourself, and then make a change)
      I'm starting with the man in the mirror
      (Ooh!)
      I'm asking him to change his ways
      (Change his ways, ooh!)
      And no message could have been any clearer
      If you want to make the world a better place
      Take a look at yourself and then make that
      (Take a look at yourself and then make that)
      Change!
      I'm starting with the man in the mirror
      (Man in the mirror, oh yeah!)
      I'm asking him to change his ways
      (Better change!)
      No message could have been any clearer
      (If you want to make the world a better place)
      You can't close your, your mind!
      (Then you close your, mind!)
      That man, that man, that man, that man
      With the man in the mirror
      (Man in the mirror, oh yeah!)
      That man, that man, that man,
      I'm asking him to change his ways
      (Better change!)
      You know, that man
      No message could have been any clearer
      If you want to make the world a better place
      (If you want to make the world a better place)
      Take a look at yourself and then make the change
      (Take a look at yourself and then make the change)
      Hoo! Hoo! Hoo! Hoo! Hoo!
      Na na na, na na na, na na, na nah
      (Ooh)
      Oh no, no no
      I'm gonna make a change
      It's gonna feel real good!
      Come on!
      (Change)
      Just lift yourself
      You know
      You've got to stop it,
      Yourself!
      (Yeah! Make that change!)
      I've got to make that change, today!
      Hoo!
      (Man in the mirror)
      You got to
      You got to not let yourself
      Brother
      Hoo!
      (Yeah! Make that change!)
      You know I've got to get
      That man, that man
      You've got to
      You've got to move! Come on!
      Come on!
      You got to
      Stand up! Stand up! Stand up!
      (Yeah! Make that change)
      Stand up and lift yourself, now!
      (Man in the mirror)
      Hoo! Hoo! Hoo!
      Aw!
      (Yeah! Make that change!)
      Gonna make that change
      Come on!
      You know it!
      You know it!
      You know it!
      You know it
      (Change)
      Make that change.`
    },
    {
      id: 5,
      title: "Man In The Mirror",
      singer: "Michael Jackson",
      url: "",
      words: `I'm gonna make a change,
        For once I'm my life
        It's gonna feel real good,
        Gonna make a difference
        Gonna make it right
        As I, turn up the collar on
        My favorite winter coat
        This wind is blowing my mind
        I see the kids in the streets,
        With not enough to eat
        Who am I to be blind?
        Pretending not to see their needs
        A summer disregard, a broken bottle top
        And a one man soul
        They follow each other on the wind ya' know
        'Cause they got nowhere to go
        That's why I want you to know
        I'm starting with the man in the mirror
        I'm asking him to change his ways
        And no message could have been any clearer
        If you want to make the world a better place
        (If you want to make the world a better place)
        Take a look at yourself, and then make a change
        (Take a look at yourself, and then make a change)
        (Na na na, na na na, na na, na nah)
        I've been a victim of a selfish kind of love
        It's time that I realize
        That there are some with no home, not a nickel to loan
        Could it be really me, pretending that they're not alone?
        A willow deeply scarred, somebody's broken heart
        And a washed-out dream
        (Washed-out dream)
        They follow the pattern of the wind ya' see
        'Cause they got no place to be
        That's why I'm starting with me
        (Starting with me!)
        I'm starting with the man in the mirror
        (Ooh!)
        I'm asking him to change his ways
        (Ooh!)
        And no message could have been any clearer
        If you want to make the world a better place
        (If you want to make the world a better place)
        Take a look at yourself, and then make a change
        (Take a look at yourself, and then make a change)
        I'm starting with the man in the mirror
        (Ooh!)
        I'm asking him to change his ways
        (Change his ways, ooh!)
        And no message could have been any clearer
        If you want to make the world a better place
        Take a look at yourself and then make that
        (Take a look at yourself and then make that)
        Change!
        I'm starting with the man in the mirror
        (Man in the mirror, oh yeah!)
        I'm asking him to change his ways
        (Better change!)
        No message could have been any clearer
        (If you want to make the world a better place)
        You can't close your, your mind!
        (Then you close your, mind!)
        That man, that man, that man, that man
        With the man in the mirror
        (Man in the mirror, oh yeah!)
        That man, that man, that man,
        I'm asking him to change his ways
        (Better change!)
        You know, that man
        No message could have been any clearer
        If you want to make the world a better place
        (If you want to make the world a better place)
        Take a look at yourself and then make the change
        (Take a look at yourself and then make the change)
        Hoo! Hoo! Hoo! Hoo! Hoo!
        Na na na, na na na, na na, na nah
        (Ooh)
        Oh no, no no
        I'm gonna make a change
        It's gonna feel real good!
        Come on!
        (Change)
        Just lift yourself
        You know
        You've got to stop it,
        Yourself!
        (Yeah! Make that change!)
        I've got to make that change, today!
        Hoo!
        (Man in the mirror)
        You got to
        You got to not let yourself
        Brother
        Hoo!
        (Yeah! Make that change!)
        You know I've got to get
        That man, that man
        You've got to
        You've got to move! Come on!
        Come on!
        You got to
        Stand up! Stand up! Stand up!
        (Yeah! Make that change)
        Stand up and lift yourself, now!
        (Man in the mirror)
        Hoo! Hoo! Hoo!
        Aw!
        (Yeah! Make that change!)
        Gonna make that change
        Come on!
        You know it!
        You know it!
        You know it!
        You know it
        (Change)
        Make that change.`
    },
    {
      id: 6,
      title: "I Want You Back",
      singer: "The Jackson 5",
      url: "s3Q80mk7bxE",
      words: `Uh ohh
        Let me tell you now
        Uh huh
        When I had you to myself
        I didn't want you around
        Those pretty faces always made you
        Stand out in a crowd
        But someone picked you from the bunch
        One glance was all it took
        Now it's much too late for me
        To take a second look
        Oh, baby, give me one more chance
        (To show you that I love you)
        Won't you please let me
        Back in your heart
        Oh, darling, I was blind to let you go
        (Let you go baby)
        But now since I see you in his arms
        (I want you back) yes, I do now
        (I want you back) ooh ooh, baby
        (I want you back) Yeah, yeah, yeah, yeah
        (I want you back) Now, now, now, now
        Trying to live without your love
        Is one long sleepless night
        Let me show you girl
        That I know wrong from right
        Every street you walk on
        I leave tear stains on the ground
        Following the girl
        I didn't even want around
        (Let me show you now)
        Oh, baby, give me one more chance
        (To show you that I love you)
        Won't you please let me
        Back in your heart
        Oh, darling, I was blind to let you go
        (Let you go baby)
        But now since I see you in his arms 
        (Ohh) (bum, bum, bum, bum-buh-bum, bum)
        (Bum, bum, bum, bum-buh-bum, bum)
        (Bum, bum, bum, bum-buh-bum, bum)
        (Bum, bum, bum, bum-buh-bum, bum) ah, buh bum, bum, bum 
        (Bum, bum, bum, bum-buh-bum, bum) ah, buh bum, bum, bum
        All I want
        (Bum, bum, bum, bum-buh-bum, bum) ah, buh bum, bum, bum
        All I need
        (Bum, bum, bum, bum-buh-bum, bum) ah, buh bum, bum, bum
        All I want
        (Bum, bum, bum, bum-buh-bum, bum) ah, buh bum, bum, bum
        All I need
        Oh, just one more chance
        To show that I love you
        Baby (baby)
        Baby (baby)
        Baby (baby)
        Forget what happened then (I want you back)
        Let me live again
        Oh, baby I was blind to let you go
        But now since I see you it is all
        (I want you back)
        Spare me of this cause
        Get back what I lost
        Oh baby I need one more chance, ha
        I tell ya that I love you
        Baby (Oh), baby (oh), baby (oh)
        I want you back, ha
        I want you back`
    },
    {
      id: 7,
      title: "Bad",
      singer: "Michael Jackson",
      url: "dsUXAEzaC3Q",
      words: `Your butt is mine
        Gonna tell you right
        Just show your face
        In broad daylight
        I'm telling you
        On how I feel
        Gonna hurt your mind
        Don't shoot to kill
        Come on
        Come on
        Lay it on me
        All right
        I'm giving you
        On count of three
        To show your stuff
        Or let it be
        I'm telling you
        Just watch your mouth
        I know your game
        What you're about
        Well they say the sky's the limit
        And to me that's really true
        But my friend you have seen nothin'
        Just wait 'til I get through
        Because I'm bad, I'm bad come on
        You know I'm bad, I'm bad come on, you know
        You know I'm bad, I'm bad come on, you know
        And the whole world has to
        Answer right now
        Just to tell you once again
        Who's bad
        The word is out
        You're doin' wrong
        Gonna lock you up
        Before too long
        Your lyin' eyes
        Gonna tell you right
        So listen up
        Don't make a fight
        Your talk is cheap
        You're not a man
        You're throwin' stones
        To hide your hands
        But they say the sky's the limit
        And to me that's really true
        And my friends you have seen nothin'
        Just wait 'til I get through
        Because I'm bad, I'm bad come on
        You know I'm bad, I'm bad come on, you know
        You know I'm bad, I'm bad come on, you know
        And the whole world has to
        Answer right now
        Just to tell you once again
        Who's bad
        We can change the world tomorrow
        This could be a better place
        If you don't like what I'm sayin'
        Then won't you slap my face
        Because I'm bad, I'm bad come on
        You know I'm bad, I'm bad come on, you know
        You know I'm bad, I'm bad come on, you know
        And the whole world has to
        Answer right now
        Just to tell you once again
        Who's bad
        Because I'm bad, I'm bad come on
        You know I'm bad, I'm bad come on, you know
        You know I'm bad, I'm bad come on, you know
        And the whole world has to
        Answer right now
        Just to tell you once again
        Who's bad
        Who's bad?`
    },
    {
      id: 8,
      title: "Beat It",
      singer: "Michael Jackson",
      url: "oRdxUFDoQe0",
      words: `They told him don't you ever come around here
        Don't want to see your face, you better disappear
        The fire's in their eyes and their words are really clear
        So beat it, just beat it
        You better run, you better do what you can
        Don't want to see no blood, don't be a macho man
        You want to be tough, better do what you can
        So beat it, but you want to be bad
        Just beat it, beat it, beat it, beat it
        No one wants to be defeated
        Showin' how funky and strong is your fight
        It doesn't matter who's wrong or right
        Just beat it, beat it
        Just beat it, beat it
        Just beat it, beat it
        Just beat it, beat it
        They're out to get you, better leave while you can
        Don't want to be a boy, you want to be a man
        You want to stay alive, better do what you can
        So beat it, just beat it
        You have to show them that you're really not scared
        You're playin' with your life, this ain't no truth or dare
        They'll kick you, then they beat you,
        Then they'll tell you it's fair
        So beat it, but you want to be bad
        Just beat it, beat it, beat it, beat it
        No one wants to be defeated
        Showin' how funky and strong is your fight
        It doesn't matter who's wrong or right
        Just beat it, beat it, beat it, beat it
        No one wants to be defeated
        Showin' how funky and strong is your fight
        It doesn't matter who's wrong or right
        Just beat it, beat it, beat it, beat it
        No one wants to be defeated
        Showin' how funky and strong is your fight
        It doesn't matter who's wrong or right
        Just beat it, beat it
        Beat it, beat it, beat it
        No one wants to be defeated
        Showin' how funky and strong is your fight
        It doesn't matter who's wrong or who's right
        Just beat it, beat it, beat it, beat it
        No one wants to be defeated
        Showin' how funky and strong is your fight
        It doesn't matter who's wrong or right
        Just beat it, beat it, beat it, beat it
        No one wants to be defeated
        Showin' how funky and strong is your fight
        It doesn't matter who's wrong or right
        Just beat it, beat it
        Beat it, beat it, beat it`
    }
  ]
};

app.get("/songs", (req, res, next) => {
  const { sort } = req.query;
  if (sort) {
    const songsArr = [...data.songs];
    songsArr.sort(compare);
    res.json(songsArr);
  } else next();
});

app.get("/songs", (req, res) => {
  res.json(data["songs"]);
});

function compare(a, b) {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
}

app.post("/song", (req, res) => {
  try {
    const id = Math.floor(Math.random() * 100000);
    const { title, singer, words } = req.body;
    const newSong = { id, title, singer, words };
    data.songs.push(newSong);
    res.status(200);
    res.json(data.songs);
  } catch (ex) {
    res.status(500);
  }
});

app.delete("/song/:id", (req, res) => {
  try {
    const { id } = req.params;
    const index = getIndex(data.songs, +id);
    data.songs.splice(index, 1);
    res.status(200);
    res.json(data.songs);
  } catch (ex) {
    res.status(500);
  }
});

function getIndex(arr, identifyer) {
  return arr.findIndex(s => s.id === identifyer);
}

app.put("/song/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { title, singer, words } = req.body;
    const newSong = { id, title, singer, words };
    const index = getIndex(data.songs, +id);
    data.songs[index] = newSong;
    res.status(200);
    res.json(data.songs);
  } catch (ex) {
    res.status(500);
  }
});

app.listen(8000, () => {
  console.log("server is running!");
});
