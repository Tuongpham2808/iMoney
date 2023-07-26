import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);
async function signup(email, password, fullName) {
  error.value = null;
  try {
    isPending.value = true;
    const response = await createUserWithEmailAndPassword(
      projectAuth,
      email,
      password
    );
    if (!response) throw new Error("Could not create a new user");

    await updateProfile(response.user, { displayName: fullName });

    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignUp() {
  return { error, isPending, signup };
}
