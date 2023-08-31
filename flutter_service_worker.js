'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "207a3aa8bf9f503b8c331e13182ce653",
".git/config": "f5f9890ff9484ed30e916559052ef3eb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "83bcacc2fdbb246ca84cf82e0880017a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f2f7eb64fe78bbd361546e01525fdf5c",
".git/logs/refs/heads/master": "f2f7eb64fe78bbd361546e01525fdf5c",
".git/logs/refs/remotes/origin/master": "fe35de936e7ea2e4b49697ce08f78dc0",
".git/objects/00/5d07bb0c46474e21c470dbef1bdde33abe09c7": "d4c776b4387d28e96d45ec55a08a61e6",
".git/objects/00/66ce50b45b812beaa5f12e09cbcf945bb30663": "de9dff0f529bb701a4e33d486d591a9d",
".git/objects/06/75e2636a6b97a257a1bf6201050f2d1a2a66e0": "4f39b8cca779b86b29b425b1f85c2339",
".git/objects/0a/51e1ca5bbe5d5f38f629837e41a68d928beb5d": "9dbe1f85dd74a1e566c48c9c6d195617",
".git/objects/0c/49c8f45cab815f65c1ce166f03f0142d651f2b": "a1a1f18f5ca0f3cd06010d451b8ec656",
".git/objects/0c/a3434334aa5926351dd79d3f1e8c4f8a2a5f45": "be6d65ac04ea061531be5513f47404e2",
".git/objects/0f/dec7dad66bfdf918afc325b61c8d77aa8e43a9": "3e2d7456ca87dc6375aa528e7fa23a4f",
".git/objects/14/9171d88ae48c16c5655b08f45b1c2c3d11b982": "ca7e31917178f6dab080524652724efb",
".git/objects/15/1eeea1f93255536ddea25ac183f1cb9ddeaf82": "0582d20b3c536138bfa5912ac4a338b5",
".git/objects/19/d4b8a8c4a332cf1bec150ddc189c636d423757": "f011de5869b77a953f6d22f394bbc61a",
".git/objects/1a/04859c8a83e4c3ce6b46ed820923a8c140ad20": "0a2b7c800f23849cbc3a0760b9f55c4d",
".git/objects/1b/95b55be2f23737d4139c98406dd7f8786d7a10": "162f218f98c4b48f902a28a88bdf77b3",
".git/objects/1f/f871588af3deb89754c9399dc8e47a1d87c73e": "cdc7d97f3e3e5d4d59f0ab1d6d1377a2",
".git/objects/20/043d2eb2865350da26b6561afa2a2bf2560aae": "10a2f667cd6bba1918af833f2095598e",
".git/objects/21/4737241aeef55d73842dc120be60e761bdb023": "59f224b43c709b8d21ff427661e53f8d",
".git/objects/23/e142c4b9382186cb4c576e9a27318a0abecc3d": "b56f69b3d76772643639d76c525da8d9",
".git/objects/27/9a41acd595bd3cda6480b5afa49ac05699e921": "67a1ba3d9476221ea439208c89fc121b",
".git/objects/2d/c392f06ea5bcb888a98c495bf506f9a1ba639c": "6d0df1c60848fb739777463ca954c6bd",
".git/objects/2e/8e286edaf653ab14dfa4a5966ef7710bb864e8": "7bff5cf167c0485cc2fe07f574f63f4a",
".git/objects/31/a641827205edb1399b49969ad87c6f6422fa66": "c143a259c60a0578a45ca0f918a9d455",
".git/objects/31/ab774ef1d9eb6b6204c6684aea2581a6aacf83": "ed79181c8a76ed69d75ce43c4563fa9d",
".git/objects/31/ac0b76dcd18ec3140973ec88a0b826368156cb": "08d8faf2bac67a9da9c9902ceb12473f",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3c/15f32aeb8534b5471d5153545e5ea0108e4f72": "a041a1f05ebc789145008895c375182d",
".git/objects/3c/cb5543b79c250dfa25e65782e79ff759ac94f6": "451a0b41719bb66d0bba7a3ac883b57f",
".git/objects/3d/a82c4de72ca33262c1bb4591433ec027abf96d": "49148c01d5b87a11f26e522f7f1f9459",
".git/objects/3f/03090c27d55783568caf492d7fadf80533e283": "a315df29cefed71f78ce00eec175a462",
".git/objects/42/f933820fd9911df80960a81e13875c3604f767": "1acff54581e7c89e87bf23689b622150",
".git/objects/44/9c20bef0642fad149a9c7dee4e5dc5c064a6d7": "b299128880dd4bd6287e04078323977b",
".git/objects/45/df5ef7e6a782c0e688c8f12d5f04d908116dae": "30e6265b4a5ccce610140eafeae4dadd",
".git/objects/47/05926e5c241e7049e911ae2ff15dc2cd872a33": "530f0de02443f80ae7bc602e15cff2b3",
".git/objects/4e/8e4a1e8209194db98d337aef8b84709e09cf86": "d915a1c8e8c5b33be171e03ca67fab84",
".git/objects/53/64896b59bffae03d55196e728a49563af62481": "2023e5c6c887a4d4cde6c4605176c5a0",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/2833262255a8c34d747ba68b17a85d6368f56b": "e9383a0fc6b22bb4605fd9b47150476a",
".git/objects/55/7269f071817974a0c50969afccacc2d2e39083": "3ac38d4b377e3b66d5cda8e6df38205d",
".git/objects/55/e51db040cc5aa952a58e527eed94914d486576": "e68a0efa8f1bda26863368227fbf0d5a",
".git/objects/56/be6577d737653ba3ff7b0a7a21efe3e7618107": "dbc34c85308cf6b4a1c74dfe199e43db",
".git/objects/57/b3f3aaa1feb51056b3d24dba34018060a6b7a2": "7c66d282aa8ee2f4d1d35f452f3dc507",
".git/objects/57/d2c0926a18db0e1bf3935d81b4b92d133f8b5b": "cc6a6b58b1759f7be2ccf9f3d0f818f6",
".git/objects/5a/0cf3aa311d56ee46ee0ee72f3c4c66c2602fb9": "a3bb4d5fc02649139da27d54d558b6f2",
".git/objects/5b/15aea0f972e20a94a2502a90f0a9fd960dcd8b": "29d375b201b6e34d06be00ffa3dcd267",
".git/objects/5e/16acde20a76d07ef2d7151d0c0502a89595ffd": "fbe59c6d29ff20ebcfbf72e2a7bfb3ac",
".git/objects/5f/244c09c930e0f60c83de8c2cf509439faea881": "f6f23b18fa8c80ab61ecc47dba7350b5",
".git/objects/62/5dd810851a87a155b911f7d65c5dc8873f90bf": "50f47a9e337f32cd2b50d5ec07e0c492",
".git/objects/64/53cd12d3659b6e2384fe76849d8ddb33c3f89b": "d720b410a69403e04c6db062283bcb24",
".git/objects/66/46bba2c7a5ce6f76a939eec929623f7a430151": "fea0ffce2c6e40903c46a32ebc6f4703",
".git/objects/66/717f1df28a07a4749d0d1456dd24e236cd6594": "b447971d06886d3b72b4ab86bf25cc91",
".git/objects/67/ffd99217293b0659f4663eb326f6c90fde55d7": "38e22ab0753c3943c4b281dbc6bebf47",
".git/objects/6b/3fe96ffb25c47a832049452282f7446fab270e": "f9b6157d0afbf0041a5204040f9394aa",
".git/objects/6d/4755884e223cba84049fafb5b8ca287495cf9e": "ba859161f82036dee99e35396d1f5a33",
".git/objects/6f/4684e083a018fb2b9b3e3579fa83d88e00357d": "c36a0d2885d9ce067027d762572f1a49",
".git/objects/71/2299e03edf44d98b7a943a12c1bb3fe6aff146": "7c7be17acf50e2b0cd9dad522afd3362",
".git/objects/71/665361fda2a4387be2b6adb45341d38abd7679": "563ce8663d4e7308db606e14b95af38f",
".git/objects/73/02328878227bbd3ff730dfff5245f86d9b0d8a": "4e4ec962429c5867ce24ffcd992a2592",
".git/objects/73/aeb34577f7545abe1751f1a00e829352baef84": "c1c20900e3fbb69a4879cf7fc624b1d1",
".git/objects/76/3ae91a5f6632b70ff6125434c01a331097e15e": "aa12e47e0d10ee2b28bfd67681eb1e6b",
".git/objects/76/cc51bc0eb11c949092b120d05f9dc3ad3aece9": "8b9e3ec7fe8d96f4a58677cb1a1d5dd3",
".git/objects/77/00eff40d573123adfbe765bd5f51cde0974dbd": "41bbd78a8c2004c980ba75e2b90aa2ee",
".git/objects/7b/855b1e4bf975a18f813ef38f3a87aa30e52912": "2396153b1e0c2f8e9411f2416030cbd1",
".git/objects/7d/ec575f3cd8db11b8f7fecb49f34ddb8a3a20a8": "5573a00499545cba4da25d0b9a1a51e5",
".git/objects/7e/b9d948972bdfc570d15dbbf57157e33aa59809": "80b9e3209641cb4cfe72d8566edce180",
".git/objects/80/8eef808c0fcf450165672e13720a7a734f87eb": "44c20867f08c219b816cfe77fb78ccb1",
".git/objects/84/2674e066b9dba478573a50ae836f312816481a": "c8a1e4b6391efbcb3c97da8897afa005",
".git/objects/86/422de3181774e6b8d6b87fc29c46a1c3ea548a": "e0a8734a0e61c1777da4b23626d54fd5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8c/e9133a9114a1c83e74e6671b55ab00030f87d7": "76490dfdb6fd8a76d3d7922c56facd0b",
".git/objects/8d/1a2579d53963310a56f0208078946cf93499a3": "c0876bfc5c09c1545f4eadade7ffe3ff",
".git/objects/8d/35f96fd818b38a3441939f9f972bd33e094545": "618259e7d0fe02de945c1faa9b176d8f",
".git/objects/90/05b07e86dd6353517e7f12679ec862ed4f5208": "62440bf11f357df35e72440fce9c70a7",
".git/objects/90/a8f53e2ebbf819c63134fc87ebaebdad24d069": "d3fe9ed2dbd6083466bf0826e77582d6",
".git/objects/91/44caa1aff485e0d9b66c2955f2c4ab7e934235": "825eb22d413cdd357868122b8ac8e644",
".git/objects/91/c69f4ad36f4f98e66fdf4abbab0bb9172e7918": "2982df9c53beab7711783a609d5cbc1e",
".git/objects/92/687e0b716efad9e18b8ed9064b1fbbcf98332d": "6fdbf8573c20e2efeb73f38f6a8bb1ef",
".git/objects/93/7914a40df9105ed2fe1e5850a5208f4306bc21": "547c5e2fdc37736ecbfa3a1993b2280f",
".git/objects/93/d0f30957c95d2ffe5a5bc01942c1597de632cb": "5470b7fe746847f6f0fd88b331bd2c18",
".git/objects/95/636be00138d35a9b314b4cf508c9c4fc967bf0": "9ebcfede09cf9a35caa9155b9f136e4c",
".git/objects/97/59b3d7fd926aee7e187d8b0342b202d7d1491e": "1a5899bf3c66678f3a97c1a8ebd174a6",
".git/objects/9b/d58bbd8e47a24eb64ed12868d520d8e42d1a9e": "4cb0515df8c5b9ec321881da97d2bcc5",
".git/objects/9c/f5b9ebcfa24fd75ef8f6aa3e0425bdfbf8dc47": "4337089f7641f7de0e778bdecced5284",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9e/0f342b285ad94f3d79d63d7acff32431642174": "4461f77c09ed1590ee6d7ca4710e95ad",
".git/objects/a1/b33a3b152a9bc617a4cd2a85e14949767befcc": "786929145e31b684b8c521f2bba2e624",
".git/objects/a4/84c7540cfffc4c21b855633e62968630f1fbac": "0f43426070d000f99c81c45827a90fea",
".git/objects/a5/d7e407d9f2531e10d28a2c14f9b679f33e987f": "775cabb6aa4527b11852edb87d531f98",
".git/objects/a6/50f3dad02ae1beeb7825ee3b4963568bdc143f": "611f5da08b8eca1984a5c535f2b2aedd",
".git/objects/a8/0b0123c1235cbb974d5d117a40813015774437": "e503a6eaae03659e52d2ea233a4254cd",
".git/objects/a8/a4aba650ba8e4b72ec97630cb2f820fef8100d": "a29a50966cef3ee85d921e93bda0e303",
".git/objects/ab/f5ba75218b23dce05d5027d3392a70efe29fc8": "a225cb991260ffab024d4e5ec564b7de",
".git/objects/ac/186e8eface4e20f0dbd4ec7f88b83ede1b0f7e": "d041c453707ec82d958b00d2651ac294",
".git/objects/ad/9a99dc4b335e799437fcb842459a51b0c72723": "c670f00a6acc124f28c2a264e47be9a5",
".git/objects/b2/60c71fa15cb8c1b567cfcc040b4046094911c6": "a7a3919ca3614166fd4e9c8943e9bd47",
".git/objects/b3/bd60b0d4fe13d89ad38384c7423ff7e6cd1320": "52001bc8e50e4875d4989c0072bd86be",
".git/objects/b4/60850f859473863d401ab3ba6e92c81601cfac": "f2e19447fbe59615bff5d8aca56fcc8f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/1f6c92fe874aa83527ee340257af4d5406c450": "ce626433ee91193b2559574b41db1283",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/54607aeb204cf1c43717c5665db75eef709ff0": "aced9c2c8f545999096a9eff88682d1e",
".git/objects/b9/cb5abd1e15b641ae5d0e996ecd9a9aca31a42a": "6850b7a4a6770898d303b48394437dcd",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/179e850a037c05cc396bfd3a6cfd64e71a2b70": "b62ab93eba0f73e1c445b03299e81eb9",
".git/objects/bf/124957f4640c6ff12ed971a09a9ee92476f0b9": "642a3d4d25c455f69668d536c83b9a36",
".git/objects/bf/99f50250ad48db896065b3906293c80122fc76": "b92d7e385254f3ef10e7c1d041df2080",
".git/objects/c2/0cd26b5b2f1611107da8d0a0676a33c405199d": "330936b2929bed450b160e849b807718",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c2/e7e312cd51d1bb06b3c2685c0070b6b4344c55": "9a0f0c87ae20a63a76dc3150aea52124",
".git/objects/c5/6fded6e00490bb1d80888b8465ef010b5fb163": "2d92335c0af9c642b9b92130b8f12366",
".git/objects/c5/d79c20d2b861eeac78d062ea239846bcdc636b": "036a88dd0627e06b0cc9bb31644a389f",
".git/objects/c8/d632042b545b64abcf3c34d86fe63e2d424f8b": "fcef4c0c604a19fdd490c448b5dbca65",
".git/objects/c8/f855671df63bf45934bcdebc8236d083b793cf": "3fe1c0587b5d4ce36050e9d1d7d1d53e",
".git/objects/cd/09787a5ae5e3bcbe29b234d75f476e8f3309fe": "1cc098a3310f8cd0cff14e2d0dc8d848",
".git/objects/ce/1adc4028c50454e8fa6be94b948b8eed022ffb": "1e8c3b1c33a1b96df5a63049789b6af8",
".git/objects/d0/3bcb681f2f6c128d3f4611ff4aeaaee12b40fa": "8a3d074b038552e1299ff79f4f9c4b48",
".git/objects/d2/0c8df0c41e6f0a71366aa16614df739bbdacae": "b28f6ee485ac36ddf7be968f9a011e44",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d2/eac2c0289d496c18f2ce0c6fdee08aa2592470": "ba60970d9c6c667d755dce0c0212a711",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/c7d16268e9a8ae05b35a08dda46cb784f12f74": "a4839b5acb1ae7ca1fea5786c18e44d4",
".git/objects/da/544a0c7e41bf4e9bc475a350f6b9a071c738f9": "a58a461dcfc8990bc949c08a1fa41d04",
".git/objects/da/57a5c7fd6ba0f1c79dc42c75bceac956d368e0": "bdeba3dd7c6b1c89113cd0ee31a54e3d",
".git/objects/da/d405eac017696399f0c10508df8d8d6a818137": "90c7ea9036258a9763796d31a3b76180",
".git/objects/db/4e0ab5f9f87ee103403a05daca54b9399c53c5": "4ffb2028b8095ad1392ba06bda5f0ac8",
".git/objects/df/9bbb96079441133e25838422746b14006bc2ed": "8e2cf027fd36c940a7427263ebd19f83",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e3/fe95f80629e83068b5e87876fc30efa3a2a2f8": "deb1e046198749ce838381958c202dd2",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/24b3d19f10dcfc140d888689b4bb3f23c1f662": "009831004afa0067711717d9f1293b90",
".git/objects/ec/df1e26515b8b2e5aead6eeda630be24340a10a": "fe2c6f4b1c6b2d478c4ed470b8d0bd3e",
".git/objects/ef/03b6bc7d861081a57cb73e81dd55ffb6f9b7ef": "810419f7e8afa349ced7535335780d2b",
".git/objects/f0/98bd6b6028b0d189f6d41f51c5f171e5c56cd9": "b5e842464edcc0d0a9422a1630e184ca",
".git/objects/f2/0f57369bbdea47a11f6133ee9e4aa6da34023e": "16f67ab3abdb1439663a2e226ed20836",
".git/objects/f2/f5b0050c06d8d5bad86585c4e88227aaf2fcff": "5c65d3f0d237e9f02aa477e69e6ce1b9",
".git/objects/f3/dd220a8011e491a614a499ff165478a2f9abcb": "f8e942ec39e7021035fbbfcea2d357f0",
".git/objects/f5/60613ff7a16f24c26f2076307632c5b7e88053": "fae79312b9d92ee7c9df021e5da1f114",
".git/objects/f5/95ed615feeb7f0c1dcb998d70c7ab41fea5a76": "223b7c425442bae5509093c0c4f27303",
".git/objects/f7/1a8945feb538f9e098425c6d23acfe059e7dc3": "8e07cea5997fda39defe0989fba8c03a",
".git/objects/fa/11f67240ceede1769d5b2a494be33f6d8286ef": "9ad27d0a88df5da6e7822da0d5407e09",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/87ef65f9adfebf2ce1e7f87ca9da68b3233b1c": "dd024fe54962e4b040a8dadbb8bc5044",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/refs/heads/master": "2c960ae778aa928126ae6166dc0633b4",
".git/refs/remotes/origin/master": "2c960ae778aa928126ae6166dc0633b4",
"assets/AssetManifest.bin": "4020357c9c64560dd7d809fcae6ac65e",
"assets/AssetManifest.json": "a03a9f4f68808f2b4ac6e389b7c5b9f5",
"assets/assets/audios/ain.mp3": "f8558e530d744593a798be2e6a6bc513",
"assets/assets/audios/bah.mp3": "52625e580d52fa92bbeebc27e1100662",
"assets/assets/audios/dal.mp3": "b3b76c1d6ad4b49361c81144f8a0e755",
"assets/assets/audios/fah.mp3": "cbe51bc2ba7c3676cfed8952beb4cb26",
"assets/assets/audios/goin.mp3": "324bb4b56cd037f3d0e77c9640b4cd81",
"assets/assets/audios/hah.mp3": "c504008795d77bf1d134c71df2e2a92c",
"assets/assets/audios/hamza.mp3": "1a3b063eecb28c3f158efcde86dd1d12",
"assets/assets/audios/hhah.mp3": "018030143efce430822320a9c04ce066",
"assets/assets/audios/jeem.mp3": "76155ea9c68971f63fa452a482730ffb",
"assets/assets/audios/kaf.mp3": "86ca01ffc8d70c9019229f03c7e9f79e",
"assets/assets/audios/krah.mp3": "c72dfb352776ddb0a3ca48c03efccedb",
"assets/assets/audios/lad.mp3": "bdf23e7a2ecebc1baeee0d2cfebebf36",
"assets/assets/audios/lah.mp3": "0c4844d0ff080727f92bd4c566c5154b",
"assets/assets/audios/lam.mp3": "ceaacaff5e123e49c36716c9050221d4",
"assets/assets/audios/meem.mp3": "e6bd0cfbb5598e025c8e5f4dced5c37c",
"assets/assets/audios/noon.mp3": "ce298b286575a6a312c40fa94a1ff915",
"assets/assets/audios/qaf.mp3": "bcb33e1c0d37a61a92d6e44b7d307b21",
"assets/assets/audios/rah.mp3": "39ea9ad5d8b56a305f5639ecab37fca9",
"assets/assets/audios/seen.mp3": "0e3ab8c2e476f066592df290a93d577b",
"assets/assets/audios/sheen.mp3": "8c7c3ebc2c9a9b05ac7ed0a9af8ea607",
"assets/assets/audios/simpleaudio.mp3": "1d902b2a00bda934b74003711f7ed9b9",
"assets/assets/audios/ssah.mp3": "ae718007d111c7535b34f8cc412e1766",
"assets/assets/audios/swad.mp3": "6e31260e1c47780fc285c90e316f932a",
"assets/assets/audios/thah.mp3": "51d9ec38f466d80262264308d6a76a62",
"assets/assets/audios/twah.mp3": "a8f742044d3cc498fae48f097e7428b9",
"assets/assets/audios/vav.mp3": "cff025f9fa723a6a73d309f160808501",
"assets/assets/audios/yah.mp3": "02257660f54e934db7707c33e46e6b36",
"assets/assets/audios/zah.mp3": "fe1327bfe81b45c19238e5781b9aa757",
"assets/assets/audios/zal.mp3": "c8b063de4f259de7a686842304dc7c12",
"assets/assets/gif/blankgif.gif": "0853936e57d08926ebc55e3fc2f635ae",
"assets/assets/image/humanwithoutmarksedited.png": "1cb4c6e03b4633721cf9b6cf9ac3cf49",
"assets/assets/image/pexels-nout-gons-378570.jpg": "6f62bad771fa3e5cdcaf58f51593c7e9",
"assets/assets/image/ronan-furuta-8hIErEH5pr0-unsplash.jpg": "557c906ebe652c431e9ac7a723b8aa56",
"assets/FontManifest.json": "9e0649c90f16a7be3d51ab27d6089604",
"assets/fonts/MaterialIcons-Regular.otf": "4a605f5da94f25c87a21ab9601e256e1",
"assets/NOTICES": "7899a6d8feaf94b1a36e1ad966747c4a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "4647829c7e37bb7846dc2f8a6faf3a1b",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ce5ff7535252b3d1babe55ff9f4a964a",
"/": "ce5ff7535252b3d1babe55ff9f4a964a",
"main.dart.js": "d644b46acf2d95f734b371463917bf98",
"manifest.json": "3003da4dad43aedbc334e182281cbf87",
"version.json": "805aee81ff25e310c7d518d4fa3f1fb1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
