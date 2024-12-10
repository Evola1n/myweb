    const charizardSprite = document.getElementById('charizard-sprite');

    const charizardSprites = [
        'https://img.pokemondb.net/sprites/red-blue/normal/charizard.png',
        'https://img.pokemondb.net/sprites/silver/normal/charizard.png',
        'https://img.pokemondb.net/sprites/ruby-sapphire/normal/charizard.png',
        'https://img.pokemondb.net/sprites/diamond-pearl/normal/charizard.png',
        'https://img.pokemondb.net/sprites/black-white/normal/charizard.png',
        'https://img.pokemondb.net/sprites/x-y/normal/charizard.png'
    ];

    let charizardSpriteIndex = 0;

    function changeCharizardSprite() {
        charizardSpriteIndex = (charizardSpriteIndex + 1) % charizardSprites.length;
        charizardSprite.src = charizardSprites[charizardSpriteIndex];
    }

    setInterval(changeCharizardSprite, 700); // Смена спрайта каждые 1 секунду


    // ==========================
    // SNORLAX ANIMATION
    // ==========================
    const snorlaxSprite = document.getElementById('snorlax-sprite');

    const snorlaxSprites = [
        'https://img.pokemondb.net/sprites/silver/normal/snorlax.png',
        'https://img.pokemondb.net/sprites/diamond-pearl/normal/snorlax.png',
        'https://img.pokemondb.net/sprites/black-white/normal/snorlax.png'
    ];

    let snorlaxSpriteIndex = 0;

    function changeSnorlaxSprite() {
        snorlaxSpriteIndex = (snorlaxSpriteIndex + 1) % snorlaxSprites.length;
        snorlaxSprite.src = snorlaxSprites[snorlaxSpriteIndex];
    }

    setInterval(changeSnorlaxSprite, 900);
