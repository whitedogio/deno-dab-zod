import { z } from "zod";

export const AppMetadata = z.object({
  appId: z
    .string()
    .describe(""),
  instanceId: z
    .string()
    .optional()
    .describe(""),
  name: z
    .string()
    .optional()
    .describe(
      "The 'friendly' app name. This field was used with the `open` and `raiseIntent` calls in FDC3 <2.0, which now require an `AppIdentifier` wth `appId` set. Note that for display purposes the `title` field should be used, if set, in preference to this field.",
    ),
  version: z
    .string()
    .optional()
    .describe("The Version of the application."),
  instanceMetadata: z
    .record(z.unknown())
    .optional()
    .describe(
      "An optional set of, implementation specific, metadata fields that can be used to disambiguate instances, such as a window title or screen position. Must only be set if `instanceId` is set.",
    ),
  title: z
    .string()
    .optional()
    .describe(
      "A more user-friendly application title that can be used to render UI elements",
    ),
  tooltip: z
    .string()
    .optional()
    .describe(
      "A tooltip for the application that can be used to render UI elements",
    ),
  description: z
    .string()
    .optional()
    .describe(
      "A longer, multi-paragraph description for the application that could include markup",
    ),
  icons: z
    .object({
      src: z
        .string()
        .url()
        .describe("The icon url"),
      size: z
        .string()
        .regex(/\d+x\d/)
        .optional()
        .describe("The icon dimension, formatted as `<height>x<width>`."),
      type: z
        .string()
        .optional()
        .describe(
          "Icon media type. If not present the Desktop Agent may use the src file extension.",
        ),
    })
    .array()
    .optional()
    .describe(
      "A list of icon URLs for the application that can be used to render UI elements",
    ),
  screenshots: z
    .object({
      src: z
        .string()
        .url()
        .describe("The image url"),
      size: z
        .string()
        .regex(/\d+x\d/)
        .optional()
        .describe("The icon dimension, formatted as `<height>x<width>`."),
      type: z
        .string()
        .optional()
        .describe(
          "Icon media type. If not present the Desktop Agent may use the src file extension.",
        ),
      label: z
        .string()
        .optional()
        .describe("Caption for the image"),
    })
    .array()
    .optional()
    .describe(
      "Images representing the app in common usage scenarios that can be used to render UI elements",
    ),
  resultType: z
    .string()
    .or(
      z.null(),
    )
    .optional()
    .describe(
      `The type of output returned for any intent specified during resolution. May express a particular context type (e.g. "fdc3.instrument"), channel (e.g. "channel") or a channel that will receive a specified type (e.g. "channel<fdc3.instrument>").`,
    ),
  desktopAgent: z
    .string()
    .optional(),
});
