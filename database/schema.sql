set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

 CREATE TABLE "public"."albums" (
	"albumId" serial NOT NULL,
	"name" TEXT NOT NULL,
	"description" TEXT,
	CONSTRAINT "album_pk" PRIMARY KEY ("albumId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."photo" (
	"photoId" serial NOT NULL,
	"albumId" serial NOT NULL,
	"title" TEXT,
	"caption" TEXT,
	"notes" TEXT,
	"image" TEXT NOT NULL,
	CONSTRAINT "photo_pk" PRIMARY KEY ("photoId")
) WITH (
  OIDS=FALSE
);




-- ALTER TABLE "photo" ADD CONSTRAINT "photo_fk0" FOREIGN KEY ("albumId") REFERENCES "album"("albumId");
