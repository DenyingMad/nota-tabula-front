const weakPasswords = 'qwerty_123456789passwordadmin!root01234567891234admin123asdf123go13131313131314151617181922020002121122222222323232324252627282933031323333333435363738394404141284243432144444445464748495505151505253545555555657585966061626364656543216666666666666768696969696969770717273747576777777777777777777778798808182838485868675309878889990919293949596979898765499ADMINAdminAdministatorDemoKKKKKKKManagerPASSWORDQwertyTESTaaaaaaaaaaabc123abd234abgrtyuaccessaccess14actionadmadminadministratoradmnalbertalexalexisamandaamateurandreaandrewangelangelaangelsanimalanthonyapolloappleapplesarsenalarthurasdfasdf123asdfgasdfghashleyassholeaugustaustinbabybackupbackupexecbadboybaileybananabarneybaseballbatmanbeachbearbeaverbeavisbeerbigcockbigdaddybigdickbigdogbigtitsbillbillybirdiebitchbitchesbitemeblackblankblazerblondeblondesblowjobblowmebluebond007bonnieboobooboobsboogerboomerbootybostonbrandonbrandybravesbrazilbrianbroncobroncosbubbabuddybulldogbusterbutterbuttheadcalvincamarocameroncanadacaptaincarloscartercasperchangemecharlescharliecheesechelseachesterchevychicagochickenchrisciscoclustadmclustercocacolacockcoffeecollegecompaqcompaqcomputercookiecookie123coolcoopercorrectcorvettecowboycowboyscreamcrystalcummingcumshotcuntdakotadallasdanieldanielledavedaviddebbiedefaultdefaultdelldemodennisdiablodiamonddickdirtydmzdoctordoggiedolphindolphinsdominodonalddragondreamsdrivereagleeagle1eagleseatdirtedwardeinsteinenjoyenterericeroticexchadmexchangeextremefalconfenderferrarifictionfirefirebirdfishfishingfloridaflowerflyersfoobarfootballfordforeverfrankfredfreddyfreedomftpfuckfuckedfuckerfuckingfuckmefuckyoufuckyou1gandalfgatewaygatewaygatorsgeminigeorgegiantsgingergirlgirlsgodgoldengolfgolfergordongreatgreengregoryguestguestguitargunnerguruhammerhannahhappyhardcoreharleyheatherhellohelpmehentaihockeyhootershorneyhornyhotdoghousehunterhuntingicemaniloveyouiloveyou1internetiwantujackjackiejacksonjaguarjakejamesjapanjasminejasonjasperjenniferjeremyjessicajohnjohnnyjohnsonjordanjosephjoshuajuicejuniorjustinkellykevinkillerkingkittyknightladieslakerslaurenleatherlegendletmeinlittleloginlondonlotusloveloverloversluckylustmaddogmadisonmaggiemagicmagnummailmanagermarinemarkmarlboromartinmarvinmastermatrixmattmatthewmaverickmaxwellmelissamembermercedesmerlinmichaelmichellemickeymidnightmikemillerminemiss4youmistressmoneymoneymonicamonitormonkeymonstermorganmothermountainmoviemuffinmurphymusicmustangnakednascarnathannaughtyncc1701neonewpassnewusernewyorknicholasnicolenipplenipplesnononenopasswordnotesofficeoliveroracleorangeou812paSSworDpackerspantherpantiesparisparkerpasspasspasscodepasswdpasswordpasswordpassword!password1password1patrickpaulpeachespeanutpenispepperpeterphantomphoenixplayerpleasepoiqwepookiepornpornoporschepowerprinceprincessprintprivatepurplepussiespussyqazwsxqweasdqwertqwertyqwertyqwertyuirabbitrachelracingraidersrainbowrangerrangersreadrebeccaredskinsredsoxredwingsreplicaterichardrobertrockrocketrootrosebudrunnerrush2112russiasasamanthasammysamsonsandrasaturnscoobyscooterscorpioscorpionscottseagatesecretsecretsecuritysetupsexsexsexsexyshadowshannonshavedshitsierrasilverskippyslayerslutsmithsmokeysnoopysoccersophiespacespankysparkyspidersqlsqlexecsquirtsrinivasstarstarsstartrekstarwarssteelersstevestevenstickystupidsuccesssuckitsummersunshinesupersupermansuperusersurferswimmingsydneysyssysadmsysadminsystemtaylortechteenstemptemptemp!temp123tennisteresatesttesttest!test123testertestingthemanthomasthunderthx1138tiffanytigertigerstiggertimetitstivolitmptomcattoortoptopguntoyotatravistroubletrustno1tsttuckerturtleuniteduservaginaveritasvictorvictoriavideovikingvipervirusvoodoovoyagerwalterwarriorwebwelcomewhateverwhitewilliamwilliewilsonwinnerwinstonwinterwizardwolfwomenwordpasswritewwwxavierxxxxxxxxxxxxxxxxxxxxxxxxxxyamahayankeeyankeesyellowyoungzxcvbnzxcvbnmzzzzzz';

const z_function = (password) => {
    let s = password + '`' + weakPasswords;
    const n = s.length;
    const z = Array(n).fill(0);
    for (let i = 0, l = 0, r = 0; i < n; i++) {
        if (i <= r)
            z[i] = Math.min(r - i + 1, z[i - l]);
        while (i + z[i] < n && s[z[i]] === s[i + z[i]])
            ++z[i];
        if (i + z[i] - 1 > r) {
            l = i;
            r = i + z[i] - 1;
        }
    }
    return z;
}

const checkPasswordWeakness = (password) => {
    const z = z_function(password.toLowerCase());
    z[0] = 0;
    return Math.max(...z);
}

export const passwordValidation = (password) => {
    return new Promise((resolve, reject) => {
        let dynamicErrorMsg = "Default";
        // regex
        const upper = /[A-Z]/,
            lower = /[a-z]/,
            number = /[0-9]/,
            space = /\s/,
            special = /[!#$%&'()*+,./:;<=>?@^_{|}~-]/;
        // tests
        if (space.test(password)) {
            dynamicErrorMsg = "Password cannot contain spaces";
            reject(dynamicErrorMsg);
        }
        if (!upper.test(password)) {
            dynamicErrorMsg = "Password must contain at least one uppercase letter";
            reject(dynamicErrorMsg)
        }
        if (!lower.test(password)) {
            dynamicErrorMsg = "Password must contain at least one lowercase letter";
            reject(dynamicErrorMsg)
        }
        if (!number.test(password)) {
            dynamicErrorMsg = "Password must contain at least one number";
            reject(dynamicErrorMsg)
        }
        if (!special.test(password)) {
            dynamicErrorMsg = "Password must contain at least one special character";
            reject(dynamicErrorMsg)
        }
        if (checkPasswordWeakness(password) >= 5) {
            dynamicErrorMsg = "Password matches a commonly used pattern."
            reject(dynamicErrorMsg)
        }
        resolve("Password is good")
    })
}

export const usernameValidation = (username) => {
    return new Promise((resolve, reject) => {
        let dynamicErrorMsg = "Default dynamic error message.";
        // regex
        const firstPeriod = /^[.]/,
            lastPeriod = /[.]$/,
            space = /\s/,
            consecutiveDots = /[.]{2,}/,
            special = /[@&=_'+,<>-]/;
        // tests
        if (space.test(username)) {
            dynamicErrorMsg = "Username cannot contain space."
            reject(dynamicErrorMsg)
        }
        if (firstPeriod.test(username)) {
            dynamicErrorMsg = "Username cannot start or end with ( . )."
            reject(dynamicErrorMsg)
        }
        if (lastPeriod.test(username)) {
            dynamicErrorMsg = "Username cannot start or end with ( . )."
            reject(dynamicErrorMsg)
        }
        if (consecutiveDots.test(username)) {
            dynamicErrorMsg = "Username cannot contain two or more ( . ) in a row."
            reject(dynamicErrorMsg)
        }
        if (special.test(username)) {
            dynamicErrorMsg = "Username cannot contain these symbols: ( @&=_'+,<>- )."
            reject(dynamicErrorMsg)
        }
        resolve(true);
    });
}