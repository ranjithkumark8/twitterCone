import { Controller, Get, Param } from '@nestjs/common';

@Controller('hashtags')
export class HashtagsController {
    @Get("/")
    getHashtags():string {
        // Todo: need to add actula logic
        return "All top hashtags"
    }

    @Get("/:tag/posts")
    getPostsForHashtag(@Param() param): string{
        // Todo: need to get all hashtags with given hashtag
        return "show all posts with specific hashtag"
    }
}
