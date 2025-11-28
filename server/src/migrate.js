const pool = require('./db');

async function migrate() {
    const client = await pool.connect();
    
    try {
        console.log('🚀 Starting database migration...');

        // Create emails table for newsletter subscriptions
        await client.query(`
            CREATE TABLE IF NOT EXISTS emails (
                id SERIAL PRIMARY KEY,
                email VARCHAR(255) UNIQUE NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log('✅ Created emails table');

        // Create articles table
        await client.query(`
            CREATE TABLE IF NOT EXISTS articles (
                id SERIAL PRIMARY KEY,
                article_id VARCHAR(255) UNIQUE NOT NULL,
                likes TEXT[] DEFAULT '{}',
                likes_count INTEGER DEFAULT 0,
                comments_count INTEGER DEFAULT 0,
                replies_count INTEGER DEFAULT 0,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log('✅ Created articles table');

        // Create comments table
        await client.query(`
            CREATE TABLE IF NOT EXISTS comments (
                id SERIAL PRIMARY KEY,
                article_id VARCHAR(255) NOT NULL,
                body TEXT NOT NULL,
                parent INTEGER REFERENCES comments(id) ON DELETE CASCADE,
                likes TEXT[] DEFAULT '{}',
                likes_count INTEGER DEFAULT 0,
                replies_count INTEGER DEFAULT 0,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                author_id VARCHAR(255) NOT NULL,
                author_name VARCHAR(255),
                author_img TEXT
            );
        `);
        console.log('✅ Created comments table');

        // Create indexes for better performance
        await client.query(`
            CREATE INDEX IF NOT EXISTS idx_articles_article_id ON articles(article_id);
            CREATE INDEX IF NOT EXISTS idx_comments_article_id ON comments(article_id);
            CREATE INDEX IF NOT EXISTS idx_comments_parent ON comments(parent);
        `);
        console.log('✅ Created indexes');

        console.log('🎉 Migration completed successfully!');
    } catch (error) {
        console.error('❌ Migration failed:', error);
        throw error;
    } finally {
        client.release();
        await pool.end();
    }
}

migrate().catch(console.error);
