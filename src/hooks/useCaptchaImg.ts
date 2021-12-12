import { getCaptchaImageApi } from '@/api/userApi';
import { OK_CODE } from '@/app/keys';
import { ref } from 'vue-demi';

export const useCaptchaImg = () => {
  const captchaImg = ref('');
  const refUuid = ref('');

  const refresh = async () => {
    let { code, img, uuid } = await getCaptchaImageApi();
    if (code !== OK_CODE) return;
    captchaImg.value = 'data:image/png;base64,' + img;
    refUuid.value = uuid;
  };

  refresh();

  return {
    uuid: refUuid,
    captchaImg,
    refresh,
  };
};
