const data = {"dom":{"tag":"root","children":[{"tag":"p","children":["Sia Kate Isobelle Furler (born December 18, 1975), popularly known as Sia, is an Australian pop singer and songwriter. She is also part of the supergroup, ",{"tag":"a","attributes":{"href":"https://genius.com/artists/Lsd","rel":"noopener"},"data":{"api_path":"/artists/1462360"},"children":["LSD"]}," alongside, British singer, ",{"tag":"a","attributes":{"href":"https://genius.com/artists/Labrinth","rel":"noopener"},"data":{"api_path":"/artists/720"},"children":["Labrinth"]}," and American DJ, ",{"tag":"a","attributes":{"href":"https://genius.com/artists/Diplo","rel":"noopener"},"data":{"api_path":"/artists/12908"},"children":["Diplo"]},". Before her solo debut, Sia also lent vocals to British acid-jazz duo, ",{"tag":"a","attributes":{"href":"https://genius.com/artists/Zero-7","rel":"noopener"},"data":{"api_path":"/artists/2570"},"children":["Zero 7"]},"."]},"",{"tag":"p","children":["Her album ",{"tag":"em","children":[{"tag":"a","attributes":{"href":"https://genius.com/albums/Sia/1000-forms-of-fear","rel":"noopener"},"data":{"api_path":"/albums/104614"},"children":["1000 Forms of Fear"]}]}," was released in 2014 and is her most successful album to date, with the top 10 single “",{"tag":"a","attributes":{"href":"https://genius.com/Sia-chandelier-lyrics","rel":"noopener"},"data":{"api_path":"/songs/378195"},"children":["Chandelier"]},".”"]},"",{"tag":"p","children":["After performing for nearly 15 years at night clubs as well as releasing five studio albums, Sia took a hiatus from performing in 2010 when she began writing for other artists. Some of her most successful collaborations are “",{"tag":"a","attributes":{"href":"https://genius.com/David-guetta-titanium-lyrics","rel":"noopener"},"data":{"api_path":"/songs/64869"},"children":["Titanium"]},"” with ",{"tag":"a","attributes":{"href":"https://genius.com/artists/David-guetta","rel":"noopener"},"data":{"api_path":"/artists/2578"},"children":["David Guetta"]},", “",{"tag":"a","attributes":{"href":"https://genius.com/Rihanna-diamonds-lyrics","rel":"noopener"},"data":{"api_path":"/songs/89794"},"children":["Diamonds"]},"” with ",{"tag":"a","attributes":{"href":"https://genius.com/artists/Rihanna","rel":"noopener"},"data":{"api_path":"/artists/89"},"children":["Rihanna"]}," and “",{"tag":"a","attributes":{"href":"https://genius.com/Flo-rida-wild-ones-lyrics","rel":"noopener"},"data":{"api_path":"/songs/68266"},"children":["Wild Ones"]},"” with ",{"tag":"a","attributes":{"href":"https://genius.com/artists/Flo-rida","rel":"noopener"},"data":{"api_path":"/artists/1081"},"children":["Flo Rida"]},"."]},"",{"tag":"p","children":["Sia famously started hiding her face during her recent promotional cycles and public events. She has stated that because when she started to become a little bit famous, it felt destabilizing for her in some ways. In order for her to maintain a certain amount of privacy, she focused on writing for other artists and started covering up her face with the famous wig."]},"",{"tag":"p","children":["Sia has the most music videos with over a billion views on YouTube of all-female artists, with 5 videos having reached at least one billion views."]},"",{"tag":"p","children":["She has received a wide range of awards, including a total of 8 Grammy nominations. Sia also has had 8 of her songs go double platinum in record sales."]},"",{"tag":"p","children":["Despite this, her excursion into film was a far cry from her illustrious music career. In 2021, Sia would release a film entitled ",{"tag":"a","attributes":{"href":"https://www.imdb.com/title/tt7541720/","rel":"noopener nofollow"},"children":[{"tag":"em","children":["Music"]}]},". Starring ",{"tag":"a","attributes":{"href":"https://www.imdb.com/name/nm4675650/?ref_=tt_cl_t1","rel":"noopener nofollow"},"children":["Maddie Ziegler"]}," in the title role of an autistic teen, the movie was ",{"tag":"a","attributes":{"href":"https://www.usatoday.com/story/entertainment/movies/2021/02/10/critics-slam-sia-film-music-nonsensical-and-cringe-inducing/6712473002/","rel":"noopener nofollow"},"children":["slammed"]}," by critics and Sia fans alike for its ",{"tag":"a","attributes":{"href":"https://intheirownleague.com/2021/02/20/why-music-2021-is-harmful-for-neurodivergent-representation-and-alternatives-to-consider/","rel":"noopener nofollow"},"children":["poor"]}," representation of autism and almost ",{"tag":"a","attributes":{"href":"https://www.indiewire.com/2021/02/sia-film-music-maddie-ziegler-autistic-community-1234617040/","rel":"noopener nofollow"},"children":["ableist"]}," sentiments. Following some ",{"tag":"a","attributes":{"href":"https://variety.com/2020/music/news/sia-debate-twitter-disabled-film-autism-music-1234837013/","rel":"noopener nofollow"},"children":["stormy"]}," tweets in response to criticism, Sia would ",{"tag":"a","attributes":{"href":"https://www.usatoday.com/story/entertainment/movies/2021/02/04/sia-adds-disclaimer-golden-globe-nominated-music-amid-backlash-autism-community/4386251001/","rel":"noopener nofollow"},"children":["delete"]}," her Twitter account. The film ",{"tag":"a","attributes":{"href":"https://www.rottentomatoes.com/m/music","rel":"noopener nofollow"},"children":["maintains"]}," an 8% on ",{"tag":"a","attributes":{"href":"https://rottontomatoes.com/","rel":"noopener nofollow"},"children":["Rotten Tomatoes"]},"."]}]}}


function formatter(children: Array<any>, index: number = 0, final: Array<string> = []): Array<string> {

    const currentChild: any = children[0];
    if (children.length === 1 && index === 0) {
        return [currentChild];
    }

    if (children.length === 1 && typeof currentChild === 'string') {
        return [...final, children[0]];
    }

    if(typeof currentChild === 'string') {
        children.splice(0, 1);
        const newIndex = index + 1;
        return formatter(children, newIndex, [...final, currentChild])
    }

    if (children.length === 1 && typeof currentChild === 'object') {
        return [...final, ...formatter(children)];
    }

    if (typeof currentChild === 'object') {
        children.splice(0, 1);
        const newIndex = index + 1;
        return formatter(children, newIndex, [...final, ...formatter(currentChild.children)])
    }

    return [''];
}

// console.log(formatter(['hello']), ['hello']);
// console.log(formatter(['hello', 'Munene']), ['hello', 'Munene']);
// console.log(formatter(['hello', 'Munene', 'yooo']), ['hello', 'Munene', 'yooo']);
// console.log(formatter(['hello', 'Munene', 'yooo', 'ma', 'ma', 'mia']), ['hello', 'Munene', 'yooo', 'ma', 'ma', 'mia']);
// console.log(formatter(['hello', 'Munene', { tag: 'a', children: ['I am a child'] }]));
console.log(formatter([
    'hello', 
    'Munene', 
    { 
        tag: 'a', 
        children: [
            'I am a child', 
            { 
                tag: 'em', 
                children: ['I am a bad man']
            }
        ] 
    },
    'yooooo'
]));
// console.log(formatter(data.dom.children).join(' '))
