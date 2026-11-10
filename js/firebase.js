/** Configuração futura: preencher com os dados públicos do projeto Firebase.
 * IMPORTANTE: não liberar write:true para visitantes anônimos.
 * A interface opera localmente até haver backend com autorização e validação.
 */
export const firebaseConfig={apiKey:'',authDomain:'',projectId:'',appId:''};
export const firebaseEnabled=Boolean(firebaseConfig.apiKey&&firebaseConfig.projectId&&firebaseConfig.appId);
export async function connectFirebase(){if(!firebaseEnabled)return null;const {initializeApp}=await import('https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js');const {getFirestore}=await import('https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js');return getFirestore(initializeApp(firebaseConfig));}
