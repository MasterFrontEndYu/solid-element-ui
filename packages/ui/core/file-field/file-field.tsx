import { TextField as KTextField } from "@kobalte/core/text-field";
import { omit, type ComponentProps, Show, createSignal } from "solid-js";
import { CloudUpload } from "../icons";
import { fullClass } from "./setting";

//TODO 样式修改，移除 UploadCloud这种已废弃的icon

export interface FileFieldProps
  extends Omit<ComponentProps<typeof KTextField>, "value" | "onChange"> {
  label?: string;
  description?: string;
  accept?: string;
  multiple?: boolean;
  onChange?: (files: File[]) => void;
  isDisabled?: boolean;
}

export const FileField = (props: FileFieldProps) => {
  const others = omit(
    props,
    "label",
    "description",
    "class",
    "accept",
    "multiple",
    "onChange",
    "validationState",
    "isDisabled",
  );

  const [files, setFiles] = createSignal<File[]>([]);

  const onFileChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.files) {
      const fileList = Array.from(target.files);
      setFiles(fileList);
      props.onChange?.(fileList);
    }
  };

  return (
    <KTextField
      class={fullClass.root}
      validationState={props.validationState}
      disabled={props.isDisabled}
      {...others}
    >
      <Show when={props.label}>
        <KTextField.Label class={fullClass.label}>{props.label}</KTextField.Label>
      </Show>

      <label class={fullClass.dropzone}>
        <KTextField.Input
          type="file"
          class="sr-only"
          accept={props.accept}
          multiple={props.multiple}
          onChange={onFileChange}
        />
        <CloudUpload class={fullClass.icon} />
        <div class="text-sm font-medium text-slate-600 dark:text-slate-400">
          {files().length > 0 ? `已选择 ${files().length} 个文件` : "点击或拖拽上传文件"}
        </div>
        <Show when={props.description}>
          <p class={fullClass.description}>{props.description}</p>
        </Show>
      </label>

      <KTextField.ErrorMessage class={fullClass.errorMessage} />
    </KTextField>
  );
};
