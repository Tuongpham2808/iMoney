import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";
import { signInWithEmailAndPassword } from "@configs/firebase";

export function useSignIn() {
  const error = ref(null);
  const isPending = ref(false);

  async function signin(email, password) {
    error.value = null;
    try {
      isPending.value = true;
      const response = await signInWithEmailAndPassword(
        projectAuth,
        email,
        password
      );
    } catch (err) {}
  }
  return {};
}
